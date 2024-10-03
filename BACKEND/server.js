const express = require("express");

const app = express()


app.get("/",(req,res)=>{
    return res.status(200).json({msg:"Server is Healthy"})
})


app.listen(7070,()=>{
    console.log("Server is running at port 7070")
})