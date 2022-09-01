import { DeepPartial } from '../types/deep-partial';
declare const defaultTheme: {
    size: {
        width: number;
        height: number;
        maxCodePaneHeight: number;
    };
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
    };
    fonts: {
        header: string;
        text: string;
        monospace: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        text: string;
        monospace: string;
    };
    space: number[];
};
export declare type SpectacleTheme = typeof defaultTheme;
export declare type SpectacleThemeOverrides = DeepPartial<SpectacleTheme>;
export default defaultTheme;
//# sourceMappingURL=default-theme.d.ts.map