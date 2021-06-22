import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

type AddItemFormPropsType = {
  placeholder: string
}

export const AddItemForm = (props: AddItemFormPropsType) => {
  return <>
    <div className="todoList-newTaskForm">
      <Input placeholder={props.placeholder} />
      <Button text='Add' type={'info'} />
    </div>
  </>;
};
