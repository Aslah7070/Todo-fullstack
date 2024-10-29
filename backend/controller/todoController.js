const Todo=require("../models/TodoModels");


const getTodo=async(req,res)=>{
    const todo=await Todo.find()
    res.send("todo")
}

const saveTodo=async(req,res)=>{
   const {text}= req.body
   const result= await Todo.create({text})
   result.save()
   res.send(result)
}

module.exports={getTodo,saveTodo}

