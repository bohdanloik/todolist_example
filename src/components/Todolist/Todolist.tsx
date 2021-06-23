import React from 'react';
import { TasksPropsType } from '../../App';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { List } from '../List/List';



type TodolistPropsType = {
    placeholder: string
    tasks: Array<TasksPropsType>
    listTitle: string
    deleteTask: (id: string) => void
    id: string
    removeTodolist : (id: string) => void
    filterTask: (tasks: Array<any>, filter: string) => void
}

export const Todolist = (props: TodolistPropsType) => {


    return <>
    <div className="todoList">
          <Header  placeholder={props.placeholder} listTitle={props.listTitle} id={props.id} removeTodolist={props.removeTodolist}/>
          <List tasks={props.tasks} deleteTask={props.deleteTask}/>
          <Footer filterTask ={props.filterTask} />
    </div>
    </>
}
