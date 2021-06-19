import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { List } from '../List/List';

type TodolistPropsType = {
    placeholder: string
}

export const Todolist = (props: TodolistPropsType) => {


    return <>
    <div className="todoList">
          <Header  placeholder={props.placeholder}/>
          <List />
          <Footer />
    </div>
    </>
}
