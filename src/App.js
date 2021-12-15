import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {Footer} from './MyComponents/Footer'
import React, {useState} from 'react'
import {AddTodo} from './MyComponents/AddTodo'

function App() {
  let initTodo
  if(localStorage.getItem("todos") === null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) =>{
    console.log("I am Deleted")
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addTodo = (title, desc) =>{
    console.log("I am adding this todo")
    let sno
    if(todos.length == 0)
      sno = 0
    else
      sno = todos[todos.length-1].sno+1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  let [todos, setTodos] = useState([initTodo])
  return (
    <div>
      <Header title='Todos List' searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
