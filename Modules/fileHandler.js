const fs=require('fs')
function readFile(){
    const file=fs.readFile("Modules/employees.json","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
}
module.exports=readFile;