const Router=require("express");
const router=Router()
const todos=require("../controller/todoController")

router
.get("/getTodo",todos.getTodo)
.post("/savetext",todos.saveTodo)
.put("/update",todos.updateTodo)
.delete("/delete",todos.deleteTodo)

module.exports=router