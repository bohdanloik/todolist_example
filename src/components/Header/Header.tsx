import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

type HeaderPropsType = {
    placeholder: string
}
export const Header = (props: HeaderPropsType) => {

    return <>
        <div className="todoList-header">
            <h3 className="todoList-header__title">What to Learn</h3>
            <div className="todoList-newTaskForm">
              <Input placeholder={props.placeholder}/>
              <Button text='Add'/>
            </div>
          </div>
    </>
}