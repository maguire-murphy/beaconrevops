import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
    title: "Sign Up",
    description: "Start tracking your SaaS revenue metrics for free. Connect Stripe & HubSpot in minutes to get instant insights into MRR, churn, and growth.",
    path: "/signup",
});
