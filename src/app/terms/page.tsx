import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
    title: "Terms of Service",
    description: "Terms of Service for Beacon - Revenue Intelligence for SaaS. Read our service terms, user obligations, billing policies, and legal agreements.",
    path: "/terms",
});

export default function TermsPage() {
    const lastUpdated = "January 14, 2026";

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
                <div className="mb-8">
                    <Link href="/" className="text-sm text-brand-600 hover:text-brand-700">
                        ← Back to Home
                    </Link>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Terms of Service
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                    Last updated: {lastUpdated}
                </p>

                <div className="prose prose-slate mt-12 max-w-none">
                    {/* Table of Contents */}
                    <div className="rounded-lg bg-slate-50 p-6 not-prose mb-12">
                        <h2 className="text-lg font-semibold text-slate-900 mb-4">Table of Contents</h2>
                        <nav className="space-y-2">
                            <a href="#acceptance" className="block text-brand-600 hover:text-brand-700">1. Acceptance of Terms</a>
                            <a href="#description" className="block text-brand-600 hover:text-brand-700">2. Service Description</a>
                            <a href="#account" className="block text-brand-600 hover:text-brand-700">3. Account Registration</a>
                            <a href="#obligations" className="block text-brand-600 hover:text-brand-700">4. User Obligations</a>
                            <a href="#billing" className="block text-brand-600 hover:text-brand-700">5. Billing and Payment</a>
                            <a href="#data" className="block text-brand-600 hover:text-brand-700">6. Data and Privacy</a>
                            <a href="#ip" className="block text-brand-600 hover:text-brand-700">7. Intellectual Property</a>
                            <a href="#termination" className="block text-brand-600 hover:text-brand-700">8. Termination</a>
                            <a href="#warranties" className="block text-brand-600 hover:text-brand-700">9. Warranties and Disclaimers</a>
                            <a href="#liability" className="block text-brand-600 hover:text-brand-700">10. Limitation of Liability</a>
                            <a href="#general" className="block text-brand-600 hover:text-brand-700">11. General Provisions</a>
                        </nav>
                    </div>

                    <section id="acceptance">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the Beacon service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
                        </p>
                        <p>
                            We may update these Terms from time to time. Your continued use of the Service after changes are posted constitutes your acceptance of the updated Terms.
                        </p>
                    </section>

                    <section id="description">
                        <h2>2. Service Description</h2>
                        <p>
                            Beacon provides revenue intelligence and analytics software for B2B SaaS companies, including:
                        </p>
                        <ul>
                            <li>MRR (Monthly Recurring Revenue) and ARR (Annual Recurring Revenue) tracking</li>
                            <li>Customer churn and retention analytics</li>
                            <li>Pipeline intelligence and forecasting</li>
                            <li>Integration with third-party services including Stripe and HubSpot</li>
                        </ul>
                        <p>
                            We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.
                        </p>
                    </section>

                    <section id="account">
                        <h2>3. Account Registration</h2>
                        <p>
                            To use the Service, you must create an account. You agree to:
                        </p>
                        <ul>
                            <li>Provide accurate, complete, and current information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Notify us immediately of any unauthorized use of your account</li>
                            <li>Be responsible for all activities under your account</li>
                        </ul>
                        <p>
                            You must be at least 18 years old to create an account. Accounts are for business use only.
                        </p>
                    </section>

                    <section id="obligations">
                        <h2>4. User Obligations</h2>
                        <p>You agree NOT to:</p>
                        <ul>
                            <li>Use the Service for any unlawful purpose or in violation of any laws</li>
                            <li>Attempt to gain unauthorized access to any part of the Service</li>
                            <li>Interfere with or disrupt the Service or servers</li>
                            <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                            <li>Use the Service to transmit harmful code, viruses, or malware</li>
                            <li>Violate any third-party rights, including intellectual property rights</li>
                            <li>Resell, sublicense, or redistribute the Service without authorization</li>
                        </ul>
                    </section>

                    <section id="billing">
                        <h2>5. Billing and Payment</h2>
                        <h3>Free Tier</h3>
                        <p>
                            Beacon offers a free tier with limited features. We reserve the right to change free tier limits at any time with 30 days notice.
                        </p>
                        <h3>Paid Plans</h3>
                        <p>
                            If you subscribe to a paid plan:
                        </p>
                        <ul>
                            <li>Fees are charged in advance on a monthly or annual basis</li>
                            <li>All fees are non-refundable unless otherwise stated</li>
                            <li>You authorize us to charge your payment method automatically</li>
                            <li>You are responsible for all applicable taxes</li>
                            <li>Price changes will be communicated 30 days in advance</li>
                        </ul>
                        <h3>Cancellation</h3>
                        <p>
                            You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. You will continue to have access to paid features until that date.
                        </p>
                    </section>

                    <section id="data">
                        <h2>6. Data and Privacy</h2>
                        <p>
                            Your use of the Service is also governed by our <Link href="/privacy" className="text-brand-600 hover:text-brand-700">Privacy Policy</Link>.
                        </p>
                        <p>By using the Service, you grant us permission to:</p>
                        <ul>
                            <li>Access data from connected services (Stripe, HubSpot) as necessary to provide the Service</li>
                            <li>Process and analyze your data to generate insights and analytics</li>
                            <li>Store your data securely in accordance with our Privacy Policy</li>
                        </ul>
                        <p>
                            You retain all ownership rights to your data. We do not sell your data to third parties.
                        </p>
                    </section>

                    <section id="ip">
                        <h2>7. Intellectual Property</h2>
                        <p>
                            The Service, including all software, design, text, graphics, and other content, is owned by Beacon or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                        </p>
                        <p>
                            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use the Service for your internal business purposes.
                        </p>
                    </section>

                    <section id="termination">
                        <h2>8. Termination</h2>
                        <p>
                            We may suspend or terminate your access to the Service at any time for:
                        </p>
                        <ul>
                            <li>Violation of these Terms</li>
                            <li>Non-payment of fees</li>
                            <li>Fraudulent activity or misuse of the Service</li>
                            <li>Request by law enforcement or other government agencies</li>
                        </ul>
                        <p>
                            Upon termination, your right to access the Service immediately ceases. We will provide you with a reasonable opportunity to export your data, subject to the terms of your subscription.
                        </p>
                    </section>

                    <section id="warranties">
                        <h2>9. Warranties and Disclaimers</h2>
                        <p>
                            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                        <p>
                            We do not warrant that:
                        </p>
                        <ul>
                            <li>The Service will be uninterrupted or error-free</li>
                            <li>Defects will be corrected</li>
                            <li>The Service is free of viruses or harmful components</li>
                            <li>Results obtained from the Service will be accurate or reliable</li>
                        </ul>
                    </section>

                    <section id="liability">
                        <h2>10. Limitation of Liability</h2>
                        <p>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, BEACON SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                        </p>
                        <p>
                            OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
                        </p>
                        <p>
                            Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you.
                        </p>
                    </section>

                    <section id="general">
                        <h2>11. General Provisions</h2>
                        <h3>Governing Law</h3>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                        </p>
                        <h3>Dispute Resolution</h3>
                        <p>
                            Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court.
                        </p>
                        <h3>Severability</h3>
                        <p>
                            If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
                        </p>
                        <h3>Entire Agreement</h3>
                        <p>
                            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Beacon regarding the Service.
                        </p>
                        <h3>Contact</h3>
                        <p>
                            For questions about these Terms, contact us at{" "}
                            <a href="mailto:legal@beacon.com" className="text-brand-600 hover:text-brand-700">
                                legal@beacon.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
