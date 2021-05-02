import React,{useState} from 'react';
import { Button } from '@material-ui/core';
function EditTodo(props) {
    function update(e){
        e.stopPropagation()
        
        console.log('update is triggerd '+props.id);
    }
    function remove(e){
        e.stopPropagation()
        console.log('delete is triggred '+props.id)
    }
    return(
        <div style={{float:'right'}}>
            <Button onClick={update}>Edit</Button>
            <Button onClick={remove}>Remove</Button>
        </div>
    )
}

export default EditTodo;