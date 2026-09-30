const express = require("express")
const mongoose =require("mongoose")
const dotenv = require("dotenv")
const app = express()
dotenv.config()
app.use(express.json())

const UserRouter = require("./routers/user.routes")
const connectDB = require("./database/connectDB")
app.use("/api/v1", UserRouter)

mongoose.connect(process.env.DB_URI)
.then(()=>{
 console.log("Db connected successfully");
 
})
.catch((err)=>{
 console.log("cannot connect to DB", err);
 
})









let PORT = process.env.PORT
app.listen(PORT, (err)=>{
   if(err){
    console.log("cannot start server at this time", err);
    
  }else{
   console.log("server started on port", PORT);
  }
})


module.exports=async(req, res)=>{
  await connectDB

  return app(req, res)
}