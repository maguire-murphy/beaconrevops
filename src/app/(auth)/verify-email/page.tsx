"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { verifyEmail } from "@/server/actions/auth";

function VerifyEmailContent() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!token) {
            setStatus("error");
            setMessage("Missing verification token.");
            return;
        }

        verifyEmail(token)
            .then(() => setStatus("success"))
            .catch((err) => {
                setStatus("error");
                setMessage(err.message || "Failed to verify email.");
            });
    }, [token]);

    if (status === "loading") {
        return (
            <div className="text-center">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-indigo-600" />
                <h2 className="mt-4 text-lg font-medium text-slate-900">Verifying your email...</h2>
            </div>
        );
    }

    if (status === "success") {
        return (
            <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">Email Verified!</h2>
                <p className="mt-2 text-slate-600">
                    Thank you for verifying your email address.
                </p>
                <div className="mt-6">
                    <Link
                        href="/login"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                        Continue to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">Verification Failed</h2>
            <p className="mt-2 text-slate-600">
                {message}
            </p>
            <div className="mt-6">
                <Link
                    href="/login"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
}

export default function VerifyEmailPage() {
    return (
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Suspense fallback={<div className="flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-indigo-600" /></div>}>
                        <VerifyEmailContent />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
