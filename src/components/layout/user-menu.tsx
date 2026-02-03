"use client";

import { signOut, useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User, Settings, HelpCircle, LogOut, ChevronDown } from "lucide-react";

export function UserMenu() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);

    const userEmail = session?.user?.email || "user@example.com";
    const userName = session?.user?.name || userEmail.split("@")[0];
    const userInitials = userName
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/login" });
    };

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100 transition-colors"
                aria-label="User menu"
                aria-expanded={isOpen}
            >
                <div className="h-8 w-8 rounded-full bg-navy-deep flex items-center justify-center text-white text-sm font-semibold">
                    {userInitials}
                </div>
                <ChevronDown className={`h-4 w-4 text-slate-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg border border-slate-200 py-1 z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-slate-200">
                        <p className="text-sm font-medium text-slate-900 truncate">{userName}</p>
                        <p className="text-xs text-slate-500 truncate">{userEmail}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <Link
                            href="/settings/profile"
                            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <User className="h-4 w-4 text-slate-500" />
                            Profile
                        </Link>
                        <Link
                            href="/settings"
                            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <Settings className="h-4 w-4 text-slate-500" />
                            Settings
                        </Link>
                        <Link
                            href="/docs"
                            className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <HelpCircle className="h-4 w-4 text-slate-500" />
                            Help & Docs
                        </Link>
                    </div>

                    {/* Sign Out */}
                    <div className="border-t border-slate-200 py-1">
                        <button
                            onClick={handleSignOut}
                            className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors"
                        >
                            <LogOut className="h-4 w-4 text-red-500" />
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
