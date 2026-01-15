"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error to console (or send to error tracking service like Sentry)
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6">
            <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Something went wrong
                </h1>
                <p className="mt-4 text-lg leading-7 text-slate-600">
                    We encountered an unexpected error. Please try again.
                </p>

                {error.digest && (
                    <p className="mt-2 text-sm text-slate-500">
                        Error ID: <code className="rounded bg-slate-100 px-2 py-1 font-mono text-xs">{error.digest}</code>
                    </p>
                )}

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <button
                        onClick={reset}
                        className="flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-all hover:scale-105"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                    >
                        <Home className="h-4 w-4" />
                        Go to Homepage
                    </Link>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8">
                    <h2 className="text-sm font-semibold text-slate-900">
                        Need help?
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        If this error persists, please{" "}
                        <Link href="/contact" className="font-medium text-brand-600 hover:text-brand-700">
                            contact our support team
                        </Link>
                        {error.digest && " and include the Error ID above"}.
                    </p>
                </div>
            </div>
        </div>
    );
}
