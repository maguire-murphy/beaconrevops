"use server";

import { STRIPE_OAUTH_URL } from "@/server/integrations/stripe";
import { HUBSPOT_CONFIG, hubspotClient } from "@/server/integrations/hubspot";
import { db } from "@/server/db/client";
import { auth } from "@/server/auth";

export async function getStripeOAuthUrl(source: string = "settings") {
    const state = JSON.stringify({ source });
    // Append state to the existing URL
    return `${STRIPE_OAUTH_URL}&state=${encodeURIComponent(state)}`;
}

export async function getHubSpotOAuthUrl(source: string = "settings") {
    const scope = HUBSPOT_CONFIG.scopes;
    const redirectUri = HUBSPOT_CONFIG.redirectUri;
    const clientId = HUBSPOT_CONFIG.clientId;
    const state = JSON.stringify({ source });

    const url = `https://app.hubspot.com/oauth/authorize?client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${encodeURIComponent(state)}`;

    return url;
}

export async function disconnectIntegration(provider: "stripe" | "hubspot") {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { id: session.user.id },
        select: { organizationId: true },
    });

    if (!user?.organizationId) {
        throw new Error("No organization found");
    }

    await db.integration.deleteMany({
        where: {
            organizationId: user.organizationId,
            provider,
        },
    });

    return { success: true };
}
