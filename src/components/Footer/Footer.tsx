import React from 'react';
import { Button } from '../../common/Button/Button';

// type FooterPropsType = {
//     filteredTasks: () => void
//     filterTask: (tasks: Array<any>,  setlist: any, filter: string) => void
// }
// type ButtonType = {

// }
export const Footer = (props: any) => {

    return (
    <div className="todoList-footer" onClick={(event) => {
            const btnText = (event.target as HTMLElement).innerText;

        }}>
            <Button text = 'All' type = 'info' filterTask ={props.filterTask}/>
            <Button text = 'Completed' type = 'success' filterTask ={props.filterTask}/>
            <Button text = 'Active' type = 'danger'filterTask ={props.filterTask}/>
        </div>
    )
}