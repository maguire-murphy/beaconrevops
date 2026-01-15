"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BarChart2 } from "lucide-react";
import { useState } from "react";
import { UserMenu } from "@/components/layout/user-menu";
import { useMobileMenu } from "@/components/layout/mobile-menu-context";

const PAGE_TITLES: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/customers": "Customers",
    "/metrics": "Metrics",
    "/forecast": "Revenue Forecast",
    "/pipeline": "Pipeline Intelligence",
    "/settings": "Settings",
};

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { toggle } = useMobileMenu();

    // Check if we are in the dashboard app
    const isDashboard = pathname.startsWith("/dashboard") ||
        pathname.startsWith("/customers") ||
        pathname.startsWith("/metrics") ||
        pathname.startsWith("/forecast") ||
        pathname.startsWith("/pipeline") ||
        pathname.startsWith("/settings");

    if (isDashboard) {
        const title = PAGE_TITLES[pathname] || "Dashboard";
        return (
            <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggle}
                        className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <Menu className="h-6 w-6 text-slate-600" />
                    </button>
                    <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
                </div>
                <UserMenu />
            </header>
        );
    }

    // Landing Page Header
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-2 font-bold text-xl text-brand-900">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                        <BarChart2 className="h-5 w-5" />
                    </div>
                    <span>Beacon</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                        Pricing
                    </Link>
                    <Link href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
                        Docs
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-700 transition-all hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white px-6 py-6 shadow-lg">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="#features"
                            className="text-base font-medium text-slate-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-base font-medium text-slate-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="text-base font-medium text-slate-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Docs
                        </Link>
                        <hr className="border-slate-100" />
                        <Link
                            href="/login"
                            className="text-base font-medium text-slate-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="flex w-full justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-base font-semibold text-white hover:bg-brand-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
