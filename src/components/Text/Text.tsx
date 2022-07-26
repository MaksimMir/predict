import * as React from "react";
import { TextProps } from "./Text.props";
import styles from './Text.module.scss';
import cn from 'classnames';

const Text = ({size, color, fontStyle, className, children, ...props}: TextProps) => {
    return (
        <p className={cn(styles.p, className, {
            [styles.es]: size === 'es',
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l',
            [styles.white]: color === 'white',
            [styles.gray]: color === 'gray',
            [styles.gold]: color === 'gold',
            [styles.black]: color === 'black',
            [styles.roboto]: fontStyle === 'roboto',
            [styles.bad]: fontStyle === 'bad',
        })}>
            { children }
        </p>
    )
}

export default Text;