import React from 'react';
import { TasksPropsType } from '../../App';
import { Task } from './Task';

type ListPropsType = {
    tasks: Array<TasksPropsType>
}

export const List = (props: ListPropsType) => {
    
    const addTask = props.tasks.map((e) => {
        return <Task title={e.title}  isDone={e.isDone} id={e.id}/>
    })


    return <>
        <div className="todoList-tasks">
            {addTask}
        </div>
    </>
}

