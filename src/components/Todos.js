import React from 'react'
import Todo from './Todo'

function Todos(props) {
    let containerr = {
        minHeight : "70vh",
        margin: "40px auto"
    }
    return (
        <div className = "container" style = {containerr}>
            <h3 className="my-3">Todos List</h3>   
            {props.Todos.length === 0 ? "No Todos to display" :
            props.Todos.map((todo)=>{
                return(<Todo todo = {todo} key={todo.sno} onDelete = {props.onDelete}/> )
            })}
            
        </div>
    )
}

export default Todos
