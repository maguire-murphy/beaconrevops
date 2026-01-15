import { redirect } from "next/navigation";
import { auth } from "@/server/auth";

export default async function OnboardingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                                B
                            </div>
                            <span className="text-xl font-bold text-slate-900">Beacon</span>
                        </div>
                        <div className="text-sm text-slate-500">
                            Setting up your workspace
                        </div>
                    </div>
                </div>
            </header>
            <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
