import Link from "next/link";
import { Mail } from "lucide-react";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
    title: "Contact Us",
    description: "Get in touch with the Beacon team. Email us for support, questions, or feedback about our revenue intelligence platform.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
                <div className="mb-8">
                    <Link href="/" className="text-sm text-brand-600 hover:text-brand-700">
                        ← Back to Home
                    </Link>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                    We're here to help. Get in touch with our team.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* Support */}
                    <div className="rounded-lg border border-slate-200 p-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100">
                            <Mail className="h-6 w-6 text-brand-600" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-slate-900">
                            General Support
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Questions about your account, billing, or using Beacon? We typically respond within 24 hours.
                        </p>
                        <a
                            href="mailto:support@beacon.com"
                            className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                        >
                            support@beacon.com
                        </a>
                    </div>

                    {/* Sales */}
                    <div className="rounded-lg border border-slate-200 p-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                            <Mail className="h-6 w-6 text-indigo-600" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-slate-900">
                            Sales Inquiries
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Interested in learning more about Beacon for your team? Let's talk.
                        </p>
                        <a
                            href="mailto:hello@beacon.com"
                            className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                        >
                            hello@beacon.com
                        </a>
                    </div>

                    {/* Privacy */}
                    <div className="rounded-lg border border-slate-200 p-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                            <Mail className="h-6 w-6 text-slate-600" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-slate-900">
                            Privacy & Legal
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Questions about privacy, data handling, or our legal policies? Contact our privacy team.
                        </p>
                        <a
                            href="mailto:privacy@beacon.com"
                            className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                        >
                            privacy@beacon.com
                        </a>
                    </div>

                    {/* Security */}
                    <div className="rounded-lg border border-slate-200 p-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                            <Mail className="h-6 w-6 text-red-600" />
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-slate-900">
                            Security Issues
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Found a security vulnerability? Please report it responsibly to our security team.
                        </p>
                        <a
                            href="mailto:security@beacon.com"
                            className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                        >
                            security@beacon.com
                        </a>
                    </div>
                </div>

                <div className="mt-12 rounded-lg bg-slate-50 p-8">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Before You Contact Support
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Many questions can be answered quickly by checking our resources:
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link href="/docs" className="text-sm text-brand-600 hover:text-brand-700">
                                → Documentation & Guides
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="text-sm text-brand-600 hover:text-brand-700">
                                → Frequently Asked Questions
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/getting-started" className="text-sm text-brand-600 hover:text-brand-700">
                                → Getting Started Guide
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
