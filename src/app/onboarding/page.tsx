import { redirect } from "next/navigation";
import { auth } from "@/server/auth";
import { db } from "@/server/db/client";
import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";

export default async function OnboardingPage() {
    const session = await auth();

    if (!session?.user?.id) {
        redirect("/login");
    }

    // Fetch user's organization and integrations
    const user = await db.user.findUnique({
        where: { id: session.user.id },
        select: { organizationId: true },
    });

    let isStripeConnected = false;
    let isHubSpotConnected = false;

    if (user?.organizationId) {
        const integrations = await db.integration.findMany({
            where: { organizationId: user.organizationId },
            select: { provider: true },
        });

        isStripeConnected = integrations.some((i) => i.provider === "stripe");
        isHubSpotConnected = integrations.some((i) => i.provider === "hubspot");
    }

    // Determine initial step
    let initialStep = 1;
    if (user?.organizationId) {
        initialStep = 2;
        if (isStripeConnected) {
            initialStep = 3;
        }
        if (isHubSpotConnected) {
            initialStep = 4;
        }
    }

    return (
        <OnboardingWizard
            initialStep={initialStep}
            isStripeConnected={isStripeConnected}
            isHubSpotConnected={isHubSpotConnected}
        />
    );
}
