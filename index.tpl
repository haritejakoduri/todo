<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script
			  src="https://code.jquery.com/jquery-3.6.0.min.js"
			  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
			  crossorigin="anonymous"></script>
</head>
<body>
    <div id="root" class='container'>
        <input id="input-todo" type="text" placeholder="enter todo"/>
        <button id="todo-btn">add todo</button>
        <ul id="list"></ul>
    </div>
    <script>
    function renderData(elm){
        var list=""
        elm.forEach((data)=>{
            console.log(data);
            if(data.complete==true){
            list+="<li onclick='change(this,"+data.id+")'><del>"+data.name+"</del> <button onclick='removeTodo(this,"+data.id+")'>delete</button></li>"
            }
            else{
            list+="<li onclick='change(this,"+data.id+")'>"+data.name+"<button onclick='removeTodo(this,"+data.id+")'>delete</button></li>"
            }
        })
        return list;
    }
   function getToDoList(){
        axios.get("http://localhost:3000/").then(ers=>{
        console.log(ers)
        var list=renderData(ers.data)
        $("#list").empty().append(list)
        })
   }
   function addTodo(){
       axios.post("http://localhost:3000/",{ name: $("#input-todo").val() }).then(res=>{
           $("#list").append("<li onclick='change(this,"+res.data.id+")'>"+res.data.name+"<button onclick='removeTodo(this,"+res.data.id+")'>delete</button></li>")
       })
   }
   function change(ele,id){
       axios.put("http://localhost:3000/"+id).then(res=>{
           console.log(res)
           if(res.data.complete!=true){
           $(ele).replaceWith($("<li onclick='change(this,"+res.data.id+")'>"+res.data.name+"<button onclick='removeTodo(this,"+res.data.id+")'>delete</button></li>"))
           }
           else{
           $(ele).replaceWith($("<li onclick='change(this,"+res.data.id+")'><del>"+res.data.name+"</del><button onclick='removeTodo(this,"+res.data.id+")'>delete</button></li>"))
           }
       })
   }
   function removeTodo(ele,id){
       event.stopPropagation();
       axios.delete("http://localhost:3000/"+id).then(res=>{
           console.log(res)
               $(ele).closest('li').remove()
         
       })
   }
    $(function() {
        getToDoList();
        $("#todo-btn").on("click", addTodo);
    });
    </script>
</body>
</html>