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

  const tasks: Array<TasksPropsType> = [
    {id: v1(), title:'Css', isDone: true},
    {id: v1(), title:'Js', isDone: true},
    {id: v1(), title:'React', isDone: true},
    {id: v1(), title:'Angular', isDone: true}
  ]

  return (
      <div className="App">
        <Todolist tasks={tasks} placeholder={'Hello World'}/>
        <Todolist tasks={tasks} placeholder={'Example'}/>
      </div>
  );
}

export default App;
