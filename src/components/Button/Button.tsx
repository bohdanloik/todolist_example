import React from 'react';
import styles from './Button.module.css';

type PropsTypeButton = {
    text: string
}
export const Button = (props: PropsTypeButton) => {
    return <input className={styles.button} type='button' value={props.text}/>
}