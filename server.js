const express=require('express');
const {readfile,writefile}=require('./Modules/fileHandler')

const PORT=3000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('view engine','ejs')
app.get("/",async(req,res)=>{
    const filedata=await readfile();
    
    
    res.render('index',{filedata})
    

})
app.get("/addEmployee",(req,res)=>{
    res.render('add')
})
app.post("/add",async(req,res)=>{
    const {ID,Name,Email,Department,Basic_Salary}=req.body;
    const readdata=await readfile();
    readdata.push({ID,Name,Email,Department,Basic_Salary:Number(Basic_Salary)})
    console.log(readdata);
    await writefile(readdata);
    res.redirect('/')    
})




// app.delete("/delete/:id",async(req,res)=>{
//     const id=req.params.id;
//     const filedata=await readfile();

    


// })
app.get("/edit/:id",async(req,res)=>{
    const id=req.params.id;
    res.render("edit",{id});
    
})
app.post("edit/:id",async(req,res)=>{
    const id=req.params.id;
    const {ID,Name,Email,Department,Basic_Salary}=req.body;
    const filedata=await readfile();
    await writefile(readdata);
    res.redirect('/') 
    
})

app.listen(PORT,(err)=>{
    console.log(`Server is Running on ${PORT}`)
})