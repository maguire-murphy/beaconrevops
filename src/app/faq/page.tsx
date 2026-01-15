import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
    title: "Frequently Asked Questions",
    description: "Get answers to common questions about Beacon, pricing, integrations, data security, and more.",
    path: "/faq",
});

export default function FAQPage() {
    const faqs = [
        {
            category: "General",
            questions: [
                {
                    q: "What is Beacon?",
                    a: "Beacon is a revenue intelligence platform for B2B SaaS companies. We connect to your Stripe and HubSpot accounts to automatically track MRR, ARR, churn, retention, and pipeline metrics—giving you real-time insights into your business performance.",
                },
                {
                    q: "Who is Beacon for?",
                    a: "Beacon is designed for B2B SaaS startups with $500K-$10M in ARR. It's perfect for founders, sales leaders, and heads of operations who need clear visibility into revenue metrics without building complex spreadsheets.",
                },
                {
                    q: "Do I need technical skills to use Beacon?",
                    a: "No! Beacon is designed to be user-friendly. Simply connect your Stripe and HubSpot accounts (with OAuth - no API keys needed), and your metrics populate automatically. If you can use Stripe and HubSpot, you can use Beacon.",
                },
            ],
        },
        {
            category: "Pricing & Billing",
            questions: [
                {
                    q: "How much does Beacon cost?",
                    a: "Beacon offers a free tier for early-stage companies. Paid plans start at $99/month. Visit our pricing page for detailed plan information.",
                },
                {
                    q: "Can I start with the free tier?",
                    a: "Yes! Our free tier includes basic MRR tracking and customer analytics. No credit card required to get started. Upgrade anytime as your needs grow.",
                },
                {
                    q: "What payment methods do you accept?",
                    a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) through Stripe. We bill monthly or annually.",
                },
                {
                    q: "Can I cancel anytime?",
                    a: "Yes, you can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period.",
                },
            ],
        },
        {
            category: "Integrations",
            questions: [
                {
                    q: "Which integrations do you support?",
                    a: "Currently, Beacon integrates with Stripe (for revenue data) and HubSpot (for pipeline data). We're adding more integrations soon, including Salesforce, Pipedrive, and QuickBooks.",
                },
                {
                    q: "Is Stripe integration required?",
                    a: "Yes, Stripe is required as it's the source of your subscription and revenue data. HubSpot is optional but recommended for pipeline intelligence.",
                },
                {
                    q: "How often does data sync?",
                    a: "Stripe syncs in real-time via webhooks—any subscription change appears in Beacon within seconds. HubSpot syncs every 6 hours. You can also manually trigger a sync anytime.",
                },
                {
                    q: "Can I connect multiple Stripe accounts?",
                    a: "Not currently. Beacon connects to one Stripe account per organization. If you need multi-account support, please contact us at hello@beacon.com.",
                },
            ],
        },
        {
            category: "Data & Privacy",
            questions: [
                {
                    q: "Is my data secure?",
                    a: "Absolutely. We use industry-standard encryption (TLS 1.3) for data in transit and AES-256 encryption for data at rest. We're SOC 2 Type II compliant and follow GDPR and CCPA regulations.",
                },
                {
                    q: "Who can see my data?",
                    a: "Only you and team members you invite to your Beacon account. We never share or sell your data to third parties. See our Privacy Policy for full details.",
                },
                {
                    q: "What data do you access from Stripe?",
                    a: "We access customer information, subscription data, invoices, and products/pricing. We do NOT access or store credit card numbers or sensitive payment methods. See our Stripe Integration Guide for details.",
                },
                {
                    q: "Can I export my data?",
                    a: "Yes! You can export customer lists, metrics, and reports as CSV or Excel files from any Beacon page. Your data is always yours.",
                },
                {
                    q: "What happens to my data if I cancel?",
                    a: "Your data is preserved for 90 days after cancellation, giving you time to export if needed. After 90 days, all data is permanently deleted unless you reactivate your account.",
                },
            ],
        },
        {
            category: "Features",
            questions: [
                {
                    q: "What metrics does Beacon track?",
                    a: "Beacon tracks MRR, ARR, net revenue, churn rate (customer and revenue), retention rate, customer lifetime value (LTV), average revenue per account (ARPA), and more. All metrics update in real-time.",
                },
                {
                    q: "Can I see individual customer health?",
                    a: "Yes! The Customers page shows each customer's MRR, subscription status, tenure, and trend. Click any customer for detailed history, subscription changes, and payment timeline.",
                },
                {
                    q: "Do you support cohort analysis?",
                    a: "Yes, our Metrics section includes cohort analysis to see retention and revenue patterns by signup month or other dimensions.",
                },
                {
                    q: "Can I forecast revenue?",
                    a: "Yes! The Forecast feature projects future MRR based on historical trends, churn rates, and pipeline data (if HubSpot is connected).",
                },
            ],
        },
        {
            category: "Support",
            questions: [
                {
                    q: "How do I get help?",
                    a: "We offer email support at support@beacon.com. Typical response time is under 24 hours on business days. Check our Documentation for quick answers to common questions.",
                },
                {
                    q: "Do you offer onboarding?",
                    a: "Yes! We provide guided onboarding for all new customers. Paid plans include a personalized onboarding call to ensure you get the most out of Beacon.",
                },
                {
                    q: "Can I request new features?",
                    a: "Absolutely! We love feedback. Email us at hello@beacon.com with your feature requests. We actively incorporate customer suggestions into our roadmap.",
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
                <div className="mb-8">
                    <Link href="/" className="text-sm text-brand-600 hover:text-brand-700">
                        ← Back to Home
                    </Link>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                    Quick answers to common questions about Beacon.
                </p>

                <div className="mt-12 space-y-16">
                    {faqs.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h2 className="text-2xl font-bold text-slate-900">
                                {category.category}
                            </h2>
                            <dl className="mt-6 space-y-8">
                                {category.questions.map((faq, faqIndex) => (
                                    <div key={faqIndex}>
                                        <dt className="text-lg font-semibold text-slate-900">
                                            {faq.q}
                                        </dt>
                                        <dd className="mt-2 text-base text-slate-600">
                                            {faq.a}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-lg bg-slate-50 p-8">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Still have questions?
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Can't find the answer you're looking for? We're here to help.
                    </p>
                    <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
                        >
                            Contact Support
                        </Link>
                        <Link
                            href="/docs"
                            className="inline-flex justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                        >
                            Browse Documentation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
