import React from 'react';
import { TasksPropsType } from '../../App';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { List } from '../List/List';



type TodolistPropsType = {
    placeholder: string
    tasks: Array<TasksPropsType>
    listTitle: string
}

export const Todolist = (props: TodolistPropsType) => {


    return <>
    <div className="todoList">
          <Header  placeholder={props.placeholder} listTitle={props.listTitle}/>
          <List tasks={props.tasks}/>
          <Footer />
    </div>
    </>
}
