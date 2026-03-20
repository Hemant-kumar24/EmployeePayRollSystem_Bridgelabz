const express=require('express');
const router=express.Router();

const {getAllStudents,createStudent}=require('../controllers/studentController');

router.get("/",getAllStudents);
router.post("/add",createStudent);
router.delete("/:id",deleteStudent);
router.put("/:id",updateStudent);


module.exports=router;