import React from 'react';
import styles from './List.module.css';
import cn from 'classnames';

type TaskPropsType = {
    isDone: boolean;
    title: string;
    id: string
    deleteTask: (id: string) => void

};
export const Task = (props: TaskPropsType) => {

    const css = cn({
        [styles.task] : true,
        [styles.done] : props.isDone === true
    })
    // const isDoneStyle = props.isDone ? styles.done : '';

    return <>
        <div className={css}>
            <input  id={props.id} type="checkbox" checked={props.isDone} />
            <span>{props.title}</span>
            <button onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
    </>;

};
