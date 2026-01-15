import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface SkeletonProps {
    className?: string;
    style?: CSSProperties;
}

export function Skeleton({ className, style }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-slate-200",
                className
            )}
            style={style}
        />
    );
}

export function SkeletonCard() {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <Skeleton className="h-8 w-32 mt-4" />
            <Skeleton className="h-3 w-20 mt-2" />
        </div>
    );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
    return (
        <div className="rounded-md border bg-white overflow-hidden">
            {/* Header */}
            <div className="bg-muted/50 border-b p-4">
                <div className="flex gap-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-28" />
                </div>
            </div>
            {/* Rows */}
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="border-b last:border-0 p-4">
                    <div className="flex gap-4 items-center">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-28" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export function SkeletonChart() {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <Skeleton className="h-6 w-40 mb-6" />
            <div className="h-[300px] flex items-end gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                    <Skeleton
                        key={i}
                        className="flex-1"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                    />
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-16" />
            </div>
        </div>
    );
}
