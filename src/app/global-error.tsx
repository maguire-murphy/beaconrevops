"use client";

import { useEffect } from "react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Global error:", error);
    }, [error]);

    return (
        <html lang="en">
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                            Application Error
                        </h1>
                        <p className="mt-4 text-lg text-slate-600">
                            We encountered a critical error. Please refresh the page.
                        </p>
                        {error.digest && (
                            <p className="mt-2 text-sm text-slate-500">
                                Error ID: <code className="rounded bg-slate-100 px-2 py-1 font-mono text-xs">{error.digest}</code>
                            </p>
                        )}
                        <div className="mt-10">
                            <button
                                onClick={reset}
                                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
