import React from 'react';
import { AddItemForm } from '../../common/AddItemForm/AddItemForm';

type HeaderPropsType = {
    placeholder: string
    listTitle: string
}
export const Header = (props: HeaderPropsType) => {

    return <>
        <div className="todoList-header">
            <h3 className="todoList-header__title">{props.listTitle} <button>x</button></h3>
            <AddItemForm placeholder={props.placeholder}/>
          </div>
    </>
}

