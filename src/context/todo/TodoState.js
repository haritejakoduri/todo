import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import todoReducer from './TodoReducer';
import {TODO_ADD,TODO_REMOVE,TODO_UPDATE,CHANGE_STATE} from './TodoAction'
const TodoState =(props)=>{
    const intialState={
        todos:[]
    }
    const [state,dispatch]=useReducer(todoReducer,intialState)
    // add todo
    const addTodo = (todo)=>{
        dispatch({
            type:TODO_ADD,
            payload:todo
        })
    }
    // toggle a todo
    const toggleTodo=(todo_id)=>{
        dispatch({
            type:CHANGE_STATE,
            payload:todo_id
        })
    }

    const deleteTodo=(todo_id)=>{
        dispatch({
            type:TODO_REMOVE,
            payload:todo_id
        })
    }
    // Delete a todo
    return(
        <TodoContext.Provider value={{todos:state.todos,addTodo,toggleTodo,deleteTodo}}>{props.children}</TodoContext.Provider>
    )
}
export default TodoState;