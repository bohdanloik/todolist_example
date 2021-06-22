import React from 'react';
import { AddItemForm } from '../../common/AddItemForm/AddItemForm';

type HeaderPropsType = {
    placeholder: string
    listTitle: string
    id: string
    removeTodolist: (id: string) => void
}
export const Header = (props: HeaderPropsType) => {
     const onClickDeleteTodolist = () => {
        props.removeTodolist(props.id)
     }
    return <>
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.listTitle} <button onClick={onClickDeleteTodolist}>x</button></h3>
            <AddItemForm placeholder={props.placeholder}/>
          </div>
    </>
}

