const Router=require("express");
const router=Router()
const todos=require("../controller/todoController")

router
.get("/getTodo",todos.getTodo)
.post("/savetext",todos.saveTodo)

module.exports=router