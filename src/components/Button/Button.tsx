import * as React from "react";
import cn from 'classnames'
import { ButtonProps } from "./Button.props";
import styles from './Button.module.scss';

const Button = ({ appearance, children,  className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.btn, {
            [styles.gold__1]: appearance == 'gold__1',
            [styles.gold__2]: appearance == 'gold__2',
            [styles.gold__3]: appearance == 'gold__3',
            [styles.gold__4]: appearance == 'gold__4',
            [styles.green]: appearance == 'green',
        })}
        {...props}>
            { children }
        </button>
    )
}

export default Button;