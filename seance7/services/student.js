const student = require('../models/student.js');
var Student=require('../models/student.js')

const save = async (req, res, next) => {
    var student = new Student({name:req.body.name,age:req.body.age,classe:req.body.classe,note:req.body.note});
    student.save((err,newStudent)=>{
        if(err){
            console.log(`there is an errorr ${err}`);

        }else{
            console.log(newStudent)
            res.json(newStudent);
        }

    })
    console.log('hello')
}

const getall=(req, res, next) => {

    const std = Student.find((err,student)=>{
 
     if(err){
         console.log(`there is an errorr ${err}`);
 
     }else{
         console.log(student)
         res.json(student);
     }
 
    })
 
 
    }
 
    const getbyname=(req, res, next) => {
 
     const std= Student.findOne({name:req.params.name},(err,student)=>{
 
         if(err){
             console.log(`there is an errorr ${err}`);
     
         }else{
             console.log(student)
             res.json(student);
         }
     
        })
    } 
 
    const update=(req, res, next) => {
        //var student = new Student({name:req.body.nameStudent,age:req.body.ageStudent});
        student.updateOne({_id:req.params.id}, 
            {name:req.body.name}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
              //  console.log("Updated Docs : ", docs);
                res.json(docs)
            }
        });
       }

       const delet=(req, res, next) => {
        //var student = new Student({name:req.body.nameStudent,age:req.body.ageStudent});
        student.deleteOne({_id:req.params.id}, 
            function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
              //  console.log("Updated Docs : ", docs);
                res.json(docs)
            }
        });
       }

       const deletbyage=(req, res, next) => {
        //var student = new Student({name:req.body.nameStudent,age:req.body.ageStudent});
        student.deleteOne({"age"  : {$lt : 18}}, 
             (err, student)=> {
            if (err){
                console.log(err)
            }
            else{
              //  console.log("Updated Docs : ", docs);
                res.json(student)
            }
        });
       }

       const updatenote=(req, res, next) => {
        //var student = new Student({name:req.body.nameStudent,age:req.body.ageStudent});
        student.updateOne({"classe"  : "4twin5"}, 
        {name:req.body.name}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
              //  console.log("Updated Docs : ", docs);
                res.json(docs)
            }
        });
       }

       const getbyage=(req, res, next) => {
 
        const std= Student.find({"age"  : {$gt : 18}},(err,student)=>{
    
            if(err){
                console.log(`there is an errorr ${err}`);
        
            }else{
                console.log(student)
                res.json(student);
            }
        
           })
       } 
    

   module.exports={save, getall,getbyname, update ,getbyage,updatenote,delet,deletbyage}