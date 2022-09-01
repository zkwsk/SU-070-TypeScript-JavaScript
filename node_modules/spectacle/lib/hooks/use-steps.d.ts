/// <reference types="react" />
export declare function useSteps(numSteps?: number, { id: userProvidedId, priority, stepIndex }?: {
    id?: string | number;
    priority?: number;
    stepIndex?: number;
}): {
    stepId: string | number;
    isActive: boolean;
    step: number;
    placeholder: JSX.Element;
};
declare type StepId = string;
export declare type ActivationThresholds = Record<StepId, number>;
export declare function useCollectSteps(): {
    setStepContainer: import("react").Dispatch<import("react").SetStateAction<HTMLElement | null | undefined>>;
    activationThresholds: ActivationThresholds;
    finalStepIndex: number;
};
export {};
//# sourceMappingURL=use-steps.d.ts.map