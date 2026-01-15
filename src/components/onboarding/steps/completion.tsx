"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export function CompletionStep() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleFinish = async () => {
        setIsLoading(true);
        // Organization is already created in Welcome step
        // Just redirect to dashboard
        router.push("/dashboard");
        router.refresh();
    };

    return (
        <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 animate-in zoom-in duration-300">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                You're all set!
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-lg mx-auto">
                Your workspace is ready. We're processing your data and your dashboard will populate shortly.
            </p>

            <div className="mt-10">
                <button
                    onClick={handleFinish}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Setting up dashboard...
                        </>
                    ) : (
                        <>
                            Go to Dashboard
                            <ArrowRight className="h-4 w-4" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
