const express=require('express');
const util=require('util');
const nsmarty=require("nsmarty");
nsmarty.tpl_path=__dirname+"/template/"

const app=express();
app.use(express.json())
const todos=[
        {id:1,name:'new todo',complete:true},
        {id:2,name:'notheing',complete:true},
        {id:3,name:'new anything',complete:true},
        {id:4,name:'new todo',complete:true},
]
app.get("/home",(req,res)=>{
    var	stream = nsmarty.assign('index.tpl');
	util.pump(stream, res);
})
app.get("/",(req,res)=>{
    res.send(todos);
})
app.post('/',(req,res)=>{
    var name=req.body.name;
    var data={id:todos.length+1,name:name,complete:false}
    todos.push(data);
    res.send(data);
})
app.put('/:id',(req,res)=>{
    var id=req.params.id;
   const todo= todos.find(ele=>ele.id==parseInt(id));
    todo.complete=!todo.complete;
    res.send(todo)
})
app.delete('/:id',(req,res)=>{
    const id=req.params.id;
    const todo=todos.indexOf(todos.find(ele=>ele.id==parseInt(id)))
    const index=todos.indexOf(todo);
    const data=todos.splice(index,1)
    res.send(data)
})
app.listen(3000)