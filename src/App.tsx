import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { AddItemForm } from './common/AddItemForm/AddItemForm';
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
  // const tasks2: Array<TasksPropsType> = [
  //   {id: v1(), title:'Banana', isDone: true},
  //   {id: v1(), title:'Apple', isDone: true},
  //   {id: v1(), title:'Mango', isDone: false},
  //   {id: v1(), title:'Oranges', isDone: false}
  // ];
  // const tasks3: Array<TasksPropsType> = [
  //   {id: v1(), title:'KTM', isDone: true},
  //   {id: v1(), title:'Yamaha', isDone: false},
  //   {id: v1(), title:'Suzuki', isDone: false},
  //   {id: v1(), title:'Honda', isDone: false}
  // ];

  let [tasks4, setTask4] = useState(tasks1)
  // let [tasks5, setTask5] = useState(tasks2)
  

  const removeTask = (list: Array<any>, setlist: any, id: string) => {
    const updatedTasks = list.filter(e => e.id !== id);
    setlist(updatedTasks);
  };

  const filterTask =  (tasks: Array<TasksPropsType>, filter: string) => {
    let tasksForTodolist:  Array<TasksPropsType>= []
    if (filter === "Completed") {
     return tasksForTodolist = tasks.filter(t => t.isDone === false);
  }
  if (filter === "Active") {
     return tasksForTodolist = tasks.filter(t => t.isDone === true);
  }
  setTask4(tasksForTodolist);
  };

  const removeTodolist = (id: string) => {
    alert(`remove todolist ${id}` )
  }

  const addTask = () => {

  }

  

  return (
      <div className="App">
        <div>
          <AddItemForm placeholder={'Add new todolist'}/>
        </div>
        <div>
            <Todolist 
              id = {v1()}
              tasks = {tasks4} 
              placeholder = {'Hello World'} 
              listTitle = {'What to learn'} 
              deleteTask = {id => removeTask(tasks4, setTask4, id)}
              removeTodolist={removeTodolist}
              filterTask={filterTask}
              />
            {/* <Todolist 
              id = {v1()}
              tasks = {tasks5} 
              placeholder = {'Example'} 
              listTitle = {'What to eat'} 
              deleteTask = {id => removeTask(tasks5, setTask5, id)}
              removeTodolist={removeTodolist}
          /> */}
        </div>
        
        {/* <Todolist tasks={tasks3} placeholder={'Example1'} listTitle={'What to buy'}/> */}
      </div>
  );
}

export default App;
