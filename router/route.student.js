const route=require('express').Router()
 const studentModel=require('../models/student.model')





 route.get('/',(req,res,next)=>{
   res.send('wlc api')
 })
 route.post('/addstudent',(req,res,next)=>{
    studentModel.postNewStudent(req.body.name,req.body.age)
    .then((doc)=>res.status(200).json({msg:doc}))
    .catch((err)=>res.status(400).json({error:err}))
})

route.get('/students',(req,res,next)=>{
  studentModel.getALLStudent()
  .then((doc)=>res.status(200).json({students:doc}))
  .catch((err)=>res.status(400).json({error:err}))
})

route.get('/student/:id',(req,res,next)=>{
  studentModel.getOneStudent(req.params.id)
  .then((doc)=>res.status(200).json({students:doc}))
  .catch((err)=>res.status(400).json({error:err}))
})

route.delete('/students/:id',(req,res,next)=>{
  studentModel.deletestudent(req.params.id)
  .then((doc)=>res.status(200).json({students:doc}))
  .catch((err)=>res.status(400).json({error:err}))
})

route.patch('/studente/:id',(req,res,next)=>{
  studentModel.updatestudent(req,res,next)
  .then((doc)=>res.status(200).json({students:doc}))
  .catch((err)=>res.status(400).json({error:err}))
})











 module.exports=route