const fs=require('fs').promises
async function readFile(){
    try{
        const data= await fs.readFile("Modules/employees.json","utf-8");
        return JSON.parse(data);
    }
    catch(err){
        console.log(err)
    }

    
}
module.exports=readFile;