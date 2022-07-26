import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

type Size = 'es' | 's' | 'm' | 'l';
type Color = 'white' | 'gray' | 'gold' | 'black';
type Style = 'roboto' | 'bad';

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: Size;
    children: ReactNode;
    color?: Color;
    fontStyle?: Style;
}