const Todo=require("../models/TodoModels");


const getTodo=async(req,res)=>{
    const todo=await Todo.find()
    res.send(todo)
}

const saveTodo=async(req,res)=>{
   const {text}= req.body
   const result= await Todo.create({text})
   result.save()
   res.send(result)
}
const updateTodo=async(req,res)=>{
    try {
        const {_id,text}=req.body
    const result= await Todo.findByIdAndUpdate(_id,{text});
    res.send("update successfully")
    } catch (error) {
        console.log(error);
        
    }
}

const deleteTodo=async(req,res)=>{
    try {
        const {_id,text}=req.body
    const result= await Todo.findByIdAndDelete(_id);
    res.send("delete successfully")
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={getTodo,saveTodo,deleteTodo,updateTodo}

