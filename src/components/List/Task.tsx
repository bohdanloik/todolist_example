import React from 'react';
import styles from './List.module.css'

type TaskPropsType = {
    isDone: boolean;
    title: string;
    id: string

};
export const Task = (props: TaskPropsType) => {

    const isDoneStyle = props.isDone ? styles.done : '';

    return <>
        <div className={styles.task + ' ' + isDoneStyle}>
            <input  id={props.id} type="checkbox" checked={props.isDone} />
            <span>{props.title}</span>
        </div>
    </>;

};
