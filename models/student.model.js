
const mysql=require('mysql2')
const Joi=require('joi')

//var Student=mongoose.model('student',shemaStudent)
//var url='mongodb://localhost:27017/university'

const shemaValidation=Joi.object({
    name:Joi.string().alphanum().min(2).max(20).required(),
    age:Joi.number().required(),
})








const conncetion=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'university'
})




exports.testConnect=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
            mongoose.disconnect()
            resolve('connected !')
        }).catch((err)=>reject(err))
    })
}

exports.postNewStudent=(name,age)=>{
    return new Promise((resolve,reject)=>{
        
          let validation=shemaValidation.validate({name:name,age:age}) 
          if(validation.error){
               mongoose.disconnect()
               reject(validation.error.details[0].message)
          }
            conncetion.query("insert into students(name,age) value(?,?)",[name,age],(err,result,fieds)=>{
                if (err){
                    reject(err)
                }
               if(result){
                resolve('inserted !!')
               }
            })
    })
}



exports.getALLStudent=()=>{
    return new Promise((resolve,reject)=>{
        conncetion.query("select * from students",(err,result,fieds)=>{
            if (err){
                reject(err)
            }
           if(result){
            resolve(result)
           }
        })
    })
}
exports.getOneStudent=(id)=>{
    return new Promise((resolve,reject)=>{
        conncetion.query("select * from students where id=?",[id],(err,result,fieds)=>{
            if (err){
                reject(err)
            }
           if(result){
            resolve(result)
           }
        })
    })
}
exports.deletestudent=(id)=>{
    return new Promise((resolve,reject)=>{
        conncetion.query("delete  from students where id=?",[id],(err,result,fieds)=>{
            if (err){
                reject(err)
            }
           if(result){
            resolve(result)
           }
        })
    })
}
exports.updatestudent=(id)=>{
    return new Promise((resolve,reject)=>{
        conncetion.query("update students set completed = ? where id=?",[id],(err,result,fieds)=>{
            if (err){
                reject(err)
            }
           if(result){
            resolve(result)
           }
        })
    })
}