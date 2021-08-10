// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo) =>{
    console.log("Im on Delete of todo",todo);
    // deleting this way in react doesnot work
    // let index = todos.indexof(todo);
    // todos.spilce(index,1)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo = (title, desc) =>{
    console.log("I am add todo", title, desc);
    let sno = 0;
    if(todos.length === 0) sno = 1;
    else sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="Todos List" searchBar = {false}/>
      <Switch>
        <Route exact path = "/" render={()=>{
          return(
            <>
              <AddTodo addTodo = { addTodo } />
              <Todos Todos = {todos} onDelete = {onDelete}/>
            </>
          )
        }}>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
