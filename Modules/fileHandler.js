const { write } = require('fs');

const fs=require('fs').promises
async function readfile(){
    try{
        const data= await fs.readFile("Modules/employees.json","utf-8");
        return JSON.parse(data);
    }
    catch(err){
        console.log(err)
    }

    
}

async function writefile(data){
    try{
        await fs.writeFile("Modules/employees.json",JSON.stringify(data,null,2));
    }
    catch(err){
        console.log("error");
    }
}
module.exports={readfile,writefile};