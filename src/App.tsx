import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Todolist } from './components/Todolist/Todolist';


export type TasksPropsType = {
  id: string
  title: string
  isDone: boolean
}

function App() {

  const tasks1: Array<TasksPropsType> = [
    {id: v1(), title:'Css', isDone: true},
    {id: v1(), title:'Js', isDone: true},
    {id: v1(), title:'React', isDone: true},
    {id: v1(), title:'Angular', isDone: false}
  ];
  const tasks2: Array<TasksPropsType> = [
    {id: v1(), title:'Banana', isDone: true},
    {id: v1(), title:'Apple', isDone: true},
    {id: v1(), title:'Mango', isDone: false},
    {id: v1(), title:'Oranges', isDone: false}
  ];
  const tasks3: Array<TasksPropsType> = [
    {id: v1(), title:'KTM', isDone: true},
    {id: v1(), title:'Yamaha', isDone: false},
    {id: v1(), title:'Suzuki', isDone: false},
    {id: v1(), title:'Honda', isDone: false}
  ];

  let [tasks4, setTask4] = useState(tasks1)

  const removeTask = (list: Array<any>, setlist: any, id: string) => {
    const updatedTasks = list.filter(e => e.id !== id);
    setlist(updatedTasks);
  };

  return (
      <div className="App">
        <Todolist tasks={tasks4} placeholder={'Hello World'} listTitle={'What to learn'} deleteTask={(id) => {
          removeTask(tasks4, setTask4, id)
        }}/>
        {/* <Todolist tasks={tasks2} placeholder={'Example'} listTitle={'What to eat'}/>
        <Todolist tasks={tasks3} placeholder={'Example1'} listTitle={'What to buy'}/> */}
      </div>
  );
}

export default App;
