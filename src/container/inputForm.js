import React,{useContext, useEffect, useState} from 'react';
import TodoContext from './../context/todo/TodoContext'
import { Formik,useFormik } from 'formik';
export function Input(){
let {todos,addTodo,toggleTodo,deleteTodo}=useContext(TodoContext)
const formik = useFormik({
  initialValues: {
    todo: '',
  },
  onSubmit: values => {
    if(values!=''){
      addTodo({todo_id:todos.length!=0?todos.length:0,todo:values.todo,status:false})
    }
  },
})
  useEffect(()=>{
console.log(todos)
  },[todos])
  return(
      <div className="mb-3">
        <form onSubmit={formik.handleSubmit}>
        <input type="text" name='todo' className="form-control" id="text1" placeholder="Enter Todo"
        onChange={formik.handleChange}
         value={formik.values.todo} />
        </form>
      </div>
    )
}
