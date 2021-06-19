import React from 'react';

type TaskPropsType = {
    isDone: boolean;
    title: string;
};
export const Task = (props: TaskPropsType) => {

    return <>
        <div className="todoList-task">
            <input type="checkbox" checked={props.isDone} />
            <span>{props.title}</span>
        </div>
    </>;

};
