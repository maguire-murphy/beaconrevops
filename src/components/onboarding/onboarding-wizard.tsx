"use client";

import { useState, useEffect } from "react";
import { ProgressBar } from "@/components/onboarding/progress-bar";
import { WelcomeStep } from "@/components/onboarding/steps/welcome";
import { ConnectStripeStep } from "@/components/onboarding/steps/connect-stripe";
import { ConnectHubSpotStep } from "@/components/onboarding/steps/connect-hubspot";
import { CompletionStep } from "@/components/onboarding/steps/completion";

const STEPS = [
    { id: 1, name: "Welcome" },
    { id: 2, name: "Connect Stripe" },
    { id: 3, name: "Connect HubSpot" },
    { id: 4, name: "Ready!" },
];

interface OnboardingWizardProps {
    initialStep: number;
    isStripeConnected: boolean;
    isHubSpotConnected: boolean;
}

export function OnboardingWizard({
    initialStep,
    isStripeConnected,
    isHubSpotConnected
}: OnboardingWizardProps) {
    const [currentStep, setCurrentStep] = useState(initialStep);

    // Auto-advance if steps are already completed but user landed on earlier step
    useEffect(() => {
        if (currentStep === 2 && isStripeConnected) {
            setCurrentStep(3);
        }
        if (currentStep === 3 && isHubSpotConnected) {
            setCurrentStep(4);
        }
    }, [currentStep, isStripeConnected, isHubSpotConnected]);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    const skipStep = () => nextStep();

    return (
        <div className="space-y-8">
            <ProgressBar currentStep={currentStep} steps={STEPS} />

            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    {currentStep === 1 && <WelcomeStep onNext={nextStep} />}
                    {currentStep === 2 && (
                        <ConnectStripeStep
                            onNext={nextStep}
                            onSkip={skipStep}
                            isConnected={isStripeConnected}
                        />
                    )}
                    {currentStep === 3 && (
                        <ConnectHubSpotStep
                            onNext={nextStep}
                            onSkip={skipStep}
                            isConnected={isHubSpotConnected}
                        />
                    )}
                    {currentStep === 4 && <CompletionStep />}
                </div>
            </div>
        </div>
    );
}
