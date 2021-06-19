import React from 'react';
import { Button } from '../Button/Button';


export const Footer = () => {

    return <>
        <div className="todoList-footer">
            <Button text = {'All'}/>
            <Button text = {'Completed'}/>
            <Button text = {'Active'}/>
          </div>
    </>
}