import React from 'react';

import TodoState from './context/todo/TodoState'
import Todo from './views/Todo/index.js'
export function App() {
    return(

    <TodoState>
        <div className='container'>
            <Todo />
        </div>

    </TodoState>
    )
}