import React from 'react';
import { Task } from './Task';


export const List = () => {


    return <>
        <div className="todoList-tasks">
            <Task title={'CSS'} isDone={true}/>
            <Task title={'JS'} isDone={false}/>
            <Task title={'ReactJS'} isDone={false}/>
            <Task title={'Patterns'} isDone={true}/>
          </div>
    </>
}

