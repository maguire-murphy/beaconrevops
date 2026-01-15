import { XCircle, AlertTriangle, FileSpreadsheet, Clock } from "lucide-react";

export function ProblemSection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-600">The Problem</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Spreadsheets are killing your growth
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Most SaaS founders are flying blind. You have data in Stripe, data in HubSpot, and a messy spreadsheet trying to connect them. It's manual, error-prone, and slow.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                                <FileSpreadsheet className="h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                                Data Silos
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                <p className="flex-auto">
                                    Your billing data lives in Stripe. Your sales data lives in HubSpot. They don't talk to each other, leaving you with fragmented insights.
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                                <Clock className="h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                                Wasted Time
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                <p className="flex-auto">
                                    Founders spend 5+ hours every week manually updating spreadsheets just to answer basic questions like "What's our MRR?".
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                                <AlertTriangle className="h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                                Guesswork
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                <p className="flex-auto">
                                    Without accurate forecasting, you're guessing at your runway and hiring plan. One wrong assumption can be fatal.
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                                <XCircle className="h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                                Missed Churn
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                <p className="flex-auto">
                                    You find out about churn after it happens. No early warning signs means no chance to save at-risk accounts.
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}
