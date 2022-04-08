import { Marks } from "./Marks";

export interface SliderProps {
    unFocusColor?: string;
    focusColor?: string;
    style?: React.CSSProperties;
    className?: string;
    onChange?: (value: number) => void;
    value?: number;
    marks?: Marks;
    step?: number;
    min?: number;
    max?: number;
    unit?: string;
}