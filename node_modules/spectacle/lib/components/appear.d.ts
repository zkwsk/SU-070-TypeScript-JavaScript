import { ReactNode } from 'react';
declare type SteppedComponentProps = {
    id?: string | number;
    priority?: number;
    /** @deprecated use priority prop instead */
    stepIndex?: number;
    children: ReactNode | ((step: number, isActive: boolean) => ReactNode);
    className?: string;
    tagName?: keyof JSX.IntrinsicElements;
    activeStyle?: Partial<CSSStyleDeclaration>;
    inactiveStyle?: Partial<CSSStyleDeclaration>;
    numSteps?: number;
    alwaysAppearActive?: boolean;
};
declare type AppearProps = Omit<SteppedComponentProps, 'numSteps' | 'alwaysAppearActive'>;
export declare const Appear: (props: AppearProps) => JSX.Element;
export declare const Stepper: (props: StepperProps) => JSX.Element;
declare type StepperProps<T extends unknown[] = unknown[]> = {
    id?: string | number;
    priority?: number;
    /** @deprecated use priority prop instead */
    stepIndex?: number;
    render?: (value: T[number], step: number, isActive: boolean) => ReactNode;
    children?: (value: T[number], step: number, isActive: boolean) => ReactNode;
    className?: string;
    tagName?: keyof JSX.IntrinsicElements;
    values: T;
    alwaysVisible?: boolean;
    activeStyle?: Partial<CSSStyleDeclaration>;
    inactiveStyle?: Partial<CSSStyleDeclaration>;
};
export {};
//# sourceMappingURL=appear.d.ts.map