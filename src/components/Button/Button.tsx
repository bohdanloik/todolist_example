import React from 'react';
import styles from './Button.module.css';

type PropsTypeButton = {
    text: string
    type:string
}
export const Button = (props: PropsTypeButton) => {
    const buttonStyle = styles[props.type];
    return <button className={styles.button + ' ' + buttonStyle}>{props.text}</button>
}