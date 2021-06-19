import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist/Todolist';



function App() {
  return (
      <div className="App">
        <Todolist placeholder={'Hello World'}/>
        <Todolist placeholder={'Example'}/>
      </div>
  );
}

export default App;
