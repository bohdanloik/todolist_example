import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

type PropsTypeButton = {
    text: string
    type:string
}
export const Button = (props: PropsTypeButton) => {
    // const buttonStyle = styles[props.type];

    const css = cn({
        [styles.button] : true,
        [styles.info] : props.type === 'info',
        [styles.success] : props.type === 'success',
        [styles.danger] : props.type === 'danger'
    })
    return <button className={css}>{props.text}</button>
}