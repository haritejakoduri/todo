import React,{useContext, useEffect, useState} from 'react';
import TodoContext from './../context/todo/TodoContext'
function List(){
    let {todos}=useContext(TodoContext)
    let [list,setList]=useState({})
    useEffect(()=>{
        if(todos.length>0){
            setList(todos.reverse())
            console.log(list,'list')
        }
    },[todos])
    return(<>
    {list.length>0 && <ul className="list-group">
        {list.map(todo=><li id={todo.todo_id} className="list-group-item">{todo.todo}</li>)}
        </ul>}
    </>)
}
export default List;