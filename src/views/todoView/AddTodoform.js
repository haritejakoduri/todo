import React,{useContext} from 'react'
import {Formik, useFormik} from 'formik'
import { TodoContext } from '../../context/todoList/TodoContext';
import { Input } from '@material-ui/core';
export const NewTodo =()=>{
    const [todoList,setTodoList]=useContext(TodoContext)
    const formik = useFormik({
        initialValues:{
            newTodo:''
        },
        onSubmit:values=>{
            values.completed=false
            values.id=todoList.length+1
            setTodoList([values,...todoList])
            formik.resetForm()
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}>
                    <Input type="text" className="form-control" name='newTodo' placeholder="Enter new todo"  onChange={formik.handleChange} value={formik.values.newTodo} aria-label="add todo" aria-describedby="addtodo" aria-modal={true}/>
        </form>
    )
}