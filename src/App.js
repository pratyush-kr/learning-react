import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {TodoItem} from "./MyComponents/TodoItem"
import {Footer} from './MyComponents/Footer'
import React, {useState} from 'react'

function App() {
  const onDelete = (todo) =>{
    console.log("I am Deleted")
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))    
  }
  let [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to market',
      desc: 'Go to market to get this job done'
    },
    {
      sno: 2,
      title: 'go to the mall',
      desc: 'Go to market to get this job done'
    },
    {
      sno: 3,
      title: 'Go to Ghat',
      desc: 'Go to market to get this job done'
    },
  ])
  return (
    <div>
      <Header title='Todos List' searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
