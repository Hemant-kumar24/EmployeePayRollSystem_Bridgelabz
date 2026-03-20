const express=require('express');
const studentRoutes=require('./routes/studentRoutes');

const PORT=3000;
const app=express();
express.json();
express.urlencoded({extended:true}) 
app.set('view engine','ejs')
app.use(express.static('public'));
app.use('/api/students',studentRoutes)



app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`)
})
