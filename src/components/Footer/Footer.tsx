import React from 'react';
import { Button } from '../Button/Button';


export const Footer = () => {

    return <>
        <div className="todoList-footer">
            <Button text = {'All'} type = {'info'}/>
            <Button text = {'Completed'} type = {'success'}/>
            <Button text = {'Active'} type = {'danger'}/>
          </div>
    </>
}