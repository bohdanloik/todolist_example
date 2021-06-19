import React from 'react';
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
  ]
  const tasks2: Array<TasksPropsType> = [
    {id: v1(), title:'Banana', isDone: true},
    {id: v1(), title:'Apple', isDone: true},
    {id: v1(), title:'Mango', isDone: false},
    {id: v1(), title:'Oranges', isDone: false}
  ]
  const tasks3: Array<TasksPropsType> = [
    {id: v1(), title:'KTM', isDone: true},
    {id: v1(), title:'Yamaha', isDone: false},
    {id: v1(), title:'Suzuki', isDone: false},
    {id: v1(), title:'Honda', isDone: false}
  ]

  return (
      <div className="App">
        <Todolist tasks={tasks1} placeholder={'Hello World'} listTitle={'What to learn'}/>
        <Todolist tasks={tasks2} placeholder={'Example'} listTitle={'What to eat'}/>
        <Todolist tasks={tasks3} placeholder={'Example1'} listTitle={'What to buy'}/>
      </div>
  );
}

export default App;
