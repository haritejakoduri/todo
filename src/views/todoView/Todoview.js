import React, { useState,useContext, useEffect } from 'react';
import { TodoContext } from '../../context/todoList/TodoContext';
import {NewTodo} from './AddTodoform'
import  './listStyle.css'
import { List, Container, ListItem } from '@material-ui/core';
export function Todo(){
    let [todoList,setTodoList,changeCompleted,addToLocalStorage,getFromLocalStorage]=useContext(TodoContext)
    useEffect(()=>{
        let retrivedData=getFromLocalStorage()
        setTodoList(retrivedData)
    },[])
    useEffect(()=>{
        addToLocalStorage()
    },[todoList])
    return(
        <Container maxWidth='md'>
        <NewTodo />
        {todoList==[]?<div>you don't have any task to do add one!</div>:(
        <List className='list-group'>
        {
        todoList.map(value=>{
            console.log(value)
           return <ListItem className={`list-group-item ${value.completed?" strikeThrough":''}`} key={value.id} onClick={()=>changeCompleted(value.id)}>{value.newTodo}</ListItem>
        })
    }</List>)}</Container>)
}