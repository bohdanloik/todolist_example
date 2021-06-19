import React from 'react';
import { TasksPropsType } from '../../App';
import { Task } from './Task';

type ListPropsType = {
    tasks: Array<TasksPropsType>
}

export const List = (props: ListPropsType) => {



    return <>
        <div className="todoList-tasks">
            {/* <Task title={'CSS'} isDone={true}/>
            <Task title={'JS'} isDone={false}/>
            <Task title={'ReactJS'} isDone={false}/>
            <Task title={'Patterns'} isDone={true}/> */}
            {props.tasks.map((e) => {
                return <Task title={e.title}  isDone={e.isDone} id={e.id}/>
            })}
          </div>
    </>
}

