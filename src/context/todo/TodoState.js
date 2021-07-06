import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import todoReducer from './TodoReducer';
const TodoState =(props)=>{
    const intialState={
        todos:[]
    }
    const [state,dispatch]=useReducer(todoReducer,intialState)
    return(
        <TodoContext.Provider value={{}}>{props.children}</TodoContext.Provider>
    )
}
export default TodoState;