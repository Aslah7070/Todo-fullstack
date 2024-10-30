    
 import axios from "axios";
  
    const basicURL="http://localhost:5000"
    const handleApi = (setTodo) => {
    

     try {
        const display= async()=>{
            let responce= await axios.get(`${basicURL}/getTodo`)
            console.log(responce.data);
           await setTodo(responce.data)
        }
        display() 
        
     } catch (error) {
        console.log(error);
        
     }
     
    }
    const addTodo=async(text,setText,setTodo)=>{
      await axios.post(`${basicURL}/savetext`,{text});
        setText("");
        handleApi(setTodo)

    }

    const updateTodo=async(todoId,text,setText,setTodo,setIsUpdating)=>{
      await axios.put(`${basicURL}/update`,{_id:todoId,text});
        setText("");
        setIsUpdating(false)
        handleApi(setTodo)
       

    }
  
    
    const deleteTodo=async(todoId,setTodo)=>{
      await axios.delete(`${basicURL}/delete`,{data:{_id:todoId}})
       
        
        handleApi(setTodo)
       

    }
    
    export  {handleApi,addTodo,updateTodo,deleteTodo}
    