import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Apperance = 'gold__1' | 'gold__2' | 'gold__3' | 'gold__4' |'green';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    appearance: Apperance | string;
}