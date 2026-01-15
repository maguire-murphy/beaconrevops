import { Check } from "lucide-react";

interface ProgressBarProps {
    currentStep: number;
    steps: {
        id: number;
        name: string;
    }[];
}

export function ProgressBar({ currentStep, steps }: ProgressBarProps) {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                {steps.map((step) => (
                    <li key={step.name} className="md:flex-1">
                        {step.id < currentStep ? (
                            <div className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">
                                    Step {step.id}
                                </span>
                                <span className="text-sm font-medium text-slate-900 flex items-center gap-2">
                                    {step.name}
                                    <Check className="h-4 w-4 text-green-500" />
                                </span>
                            </div>
                        ) : step.id === currentStep ? (
                            <div
                                className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                aria-current="step"
                            >
                                <span className="text-sm font-medium text-indigo-600">
                                    Step {step.id}
                                </span>
                                <span className="text-sm font-medium text-slate-900">{step.name}</span>
                            </div>
                        ) : (
                            <div className="group flex flex-col border-l-4 border-slate-200 py-2 pl-4 hover:border-slate-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                                <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700">
                                    Step {step.id}
                                </span>
                                <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700">
                                    {step.name}
                                </span>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
