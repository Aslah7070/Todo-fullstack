import React, { useEffect, useState } from 'react';
import TodoItems from './components/TodoItems';
 
import "./App.css"
import {handleApi,addTodo,updateTodo,deleteTodo} from './utils/handleApi';
const App = () => {

  const [todo,setTodo]=useState([])
  const [text,setText]=useState("")
  const [isUpdating,setIsUpdating]=useState(false)
  const [todoId,setTodoId]=useState(false)

  console.log(todo)
  const updatemode=(id,text)=>{
    setText(text)
    setTodoId(id)
    setIsUpdating(true)
  }
  
  useEffect(()=>{
    handleApi(setTodo)
  },[])
  return (
   <div className='app'>
    <div className='container'>
<h1>ToDo App</h1>
<div className="top">
  <input type="text" placeholder='Add todos......' value={text} onChange={(e)=>setText(e.target.value)}/>
  <div className="add" onClick={isUpdating?()=>updateTodo(todoId,text,setText,setTodo,setIsUpdating):()=>addTodo(text,setText,setTodo)}>{isUpdating?"Update":"Add"}</div>
</div>
<div className="list">

  {
    todo.map((item)=><TodoItems 
    key={item._id} 
    text={item.text} 
    updatemode={()=>updatemode(item._id,item.text)}
    deleteTodo={()=>deleteTodo(item._id,setTodo)}
    
    />)
  }

</div>
    </div>

   </div>
  );
};

export default App;
