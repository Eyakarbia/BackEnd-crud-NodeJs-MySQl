const express=require('express')
const studentRoute=require('./router/route.student')
const app=express()


//zouzi7timlet bch n9rw data
app.use(express.json())
app.use(express.urlencoded({extended:true}))//urlencoded yanni e data eli bch tgi ya9raha


app.use('/',studentRoute)

app.listen(3000,()=>console.log('server run in port 3000'))