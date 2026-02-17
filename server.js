const express=require('express');
const readfile=require('./Modules/fileHandler')
const PORT=3000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('view engine','ejs')
app.get("/",async(req,res)=>{
    const filedata=await readfile();
    filedata.forEach(element => {
        console.log(element )
    });
    
    res.render('index',{filedata})
    

})
app.get("/addEmployee",(req,res)=>{
    res.render('add')
})

app.listen(PORT,(err)=>{
    console.log(`Server is Running on ${PORT}`)
})