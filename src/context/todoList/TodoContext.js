import React,{createContext,useState} from 'react';
export const TodoContext=createContext();
export function TodoProvider(props){
    const [todoList,setTodoList]=useState([
        {
            newTodo:'wash cloths',
            completed:false,
            id:1
        },
        {
            newTodo:'remove cloths',
            completed:true,
            id:2
        },
    ])
    function changeCompleted(id){
        let values=todoList;
       let data = values.filter(e=>e.id==id)
       data[0].completed=!data[0].completed
       console.log(data);
       console.log(values);
       setTodoList([...values]);
    }
    function getFromLocalStorage(){
       let k= JSON.parse(localStorage.getItem('todos'))
       return k?k:[]
    }
    function addToLocalStorage(){
        localStorage.setItem('todos',JSON.stringify(todoList))
    }
    function update(id,value){
        let updatedtodo=todoList;
        updatedtodo.map(obj=>{
            if(obj.id==id){
                obj.newTodo=value;
            }
        })
    }
    return(
        <TodoContext.Provider value={[todoList,setTodoList,changeCompleted,addToLocalStorage,getFromLocalStorage]}>
            {props.children}
        </TodoContext.Provider>
    )
}