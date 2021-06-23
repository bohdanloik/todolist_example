import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

type PropsTypeButton = {
    text: string
    type:string
    filterTask?: (tasks: Array<any>, filter: string) => void

}
export const Button = (props: PropsTypeButton) => {
    // const buttonStyle = styles[props.type];

const handler = (tasks: Array<any>, filter: string) => {
    if(props.filterTask){
    props.filterTask([
        {id: 77, title:'Css', isDone: true}]
        ,props.text,)
    }  
}

    const css = cn({
        [styles.button] : true,
        [styles.info] : props.type === 'info',
        [styles.success] : props.type === 'success',
        [styles.danger] : props.type === 'danger'
    })
    return <button 
    className={css}
    onClick={()=> handler}
    >{props.text}  </button>
}