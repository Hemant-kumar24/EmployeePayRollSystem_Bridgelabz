const express=require('express');
const readfile=require('./Modules/fileHandler')
const PORT=3000;
const app=express();
app.get("/",(req,res)=>{
    console.log(readfile());
    

})

app.listen(PORT,(err)=>{
    console.log(`Server is Running on ${PORT}`)
})