import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Is my data secure?",
        answer:
            "Yes. We use 256-bit SSL encryption and follow industry best practices. Your data is stored securely in US-based data centers. We never sell your data to third parties.",
    },
    {
        question: "Do I need engineering help to set this up?",
        answer:
            "Not at all. Beacon connects to Stripe and HubSpot via secure OAuth. It takes just a few clicks and requires no code or technical knowledge.",
    },
    {
        question: "Can I cancel anytime?",
        answer:
            "Absolutely. There are no long-term contracts for monthly plans. You can cancel your subscription at any time from your dashboard.",
    },
    {
        question: "What happens if I exceed my plan limits?",
        answer:
            "We'll notify you if you're approaching your ARR limit. You can choose to upgrade to the next tier or we'll pause data syncing until you do. We won't charge you extra automatically.",
    },
    {
        question: "Do you offer a free trial?",
        answer:
            "Yes! Our Free plan is free forever for up to $120K ARR. For larger plans, we offer a 14-day free trial so you can test the advanced features risk-free.",
    },
    {
        question: "How does the HubSpot integration work?",
        answer:
            "We sync your Deals and Companies from HubSpot to match them with your Stripe customers. This allows us to show you pipeline velocity, win rates, and revenue forecasts based on real deal data.",
    },
];

export function FAQSection() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-slate-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-slate-900">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-slate-900/10">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="pt-6">
                                <details className="group">
                                    <summary className="flex w-full items-start justify-between text-left text-slate-900 cursor-pointer list-none">
                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <Plus className="h-6 w-6 group-open:hidden" aria-hidden="true" />
                                            <Minus className="h-6 w-6 hidden group-open:block" aria-hidden="true" />
                                        </span>
                                    </summary>
                                    <p className="mt-2 pr-12 text-base leading-7 text-slate-600 pb-4">{faq.answer}</p>
                                </details>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
