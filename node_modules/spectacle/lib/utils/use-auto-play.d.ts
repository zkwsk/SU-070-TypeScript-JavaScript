import { DeckStateAndActions } from '../hooks/use-deck-state';
export declare type AutoPlayOptions = {
    enabled?: boolean;
    loop?: boolean;
    navigation: Pick<DeckStateAndActions, 'skipTo' | 'stepForward'> & {
        isFinalSlide: boolean;
    };
    interval?: number;
};
export declare const useAutoPlay: ({ enabled, loop, navigation, interval }: AutoPlayOptions) => void;
//# sourceMappingURL=use-auto-play.d.ts.map