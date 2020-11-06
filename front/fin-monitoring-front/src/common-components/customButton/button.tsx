import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './button.module.css'

type   ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    &
    { buttonClass: "general" }

export const Button = (props: ButtonPropsType) => {
    const {...restProps} = props;
    return (
        <button className={styles[props.buttonClass]} {...restProps}/>
    );
}
