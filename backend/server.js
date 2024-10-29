const express=require("express")
const mongoose=require("mongoose")
const todoRoutes=require("./Routes/TodoRoutes")
require("dotenv").config()
const cors=require("cors")
const app=express()

const PORT=process.env.port||3000

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("db connected");
    
}).catch((error)=>{
console.log(error);

})
app.use("/",todoRoutes)
app.listen(PORT,()=>console.log(`listening on  ${PORT}`))