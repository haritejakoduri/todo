import React,{useContext} from 'react'
import {Formik, useFormik} from 'formik'
import { TodoContext } from '../../context/todoList/TodoContext';
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
        <div>
        <form onSubmit={formik.handleSubmit}>
            <div className="input-group mb-3" >
                    <input type="text" className="form-control" name='newTodo' placeholder="Enter new todo"  onChange={formik.handleChange} value={formik.values.newTodo} aria-label="add todo" aria-describedby="addtodo" />
                    <button className="btn btn-outline-secondary" type="submit" id="addtodo">Add TODO</button>
            </div>
        </form>
        </div>
    )
}