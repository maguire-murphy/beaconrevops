// Script to test HubSpot OAuth URL construction
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const HUBSPOT_CONFIG = {
    clientId: process.env.HUBSPOT_CLIENT_ID,
    clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
    redirectUri: `${process.env.NEXT_PUBLIC_APP_URL}/api/integrations/hubspot/callback`,
    scopes: [
        "crm.objects.contacts.read",
        "crm.objects.companies.read",
        "crm.objects.deals.read",
        "crm.schemas.deals.read",
    ].join(" "),
};

console.log("=== HubSpot OAuth Configuration ===");
console.log("Client ID:", HUBSPOT_CONFIG.clientId);
console.log("Client ID exists:", !!HUBSPOT_CONFIG.clientId);
console.log("Client ID length:", HUBSPOT_CONFIG.clientId?.length);
console.log("\nRedirect URI:", HUBSPOT_CONFIG.redirectUri);
console.log("Scopes:", HUBSPOT_CONFIG.scopes);

const state = JSON.stringify({ source: "onboarding" });
const url = `https://app.hubspot.com/oauth/authorize?client_id=${HUBSPOT_CONFIG.clientId}&scope=${encodeURIComponent(HUBSPOT_CONFIG.scopes)}&redirect_uri=${encodeURIComponent(HUBSPOT_CONFIG.redirectUri)}&state=${encodeURIComponent(state)}`;

console.log("\n=== Full OAuth URL ===");
console.log(url);

console.log("\n=== URL Components (Decoded) ===");
const urlObj = new URL(url);
console.log("client_id:", urlObj.searchParams.get("client_id"));
console.log("scope:", urlObj.searchParams.get("scope"));
console.log("redirect_uri:", urlObj.searchParams.get("redirect_uri"));
console.log("state:", urlObj.searchParams.get("state"));

console.log("\n=== Checklist ===");
console.log("✓ Check that the Client ID matches your HubSpot app");
console.log("✓ Check that the Redirect URI is registered in your HubSpot app settings");
console.log("✓ The redirect URI must match EXACTLY (including http/https, trailing slashes, ports)");
console.log("✓ Make sure your HubSpot app has the required scopes enabled");
console.log("✓ If testing locally, your HubSpot app must allow localhost redirects");
