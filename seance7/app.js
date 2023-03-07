const express = require("express");
const logger=require('morgan');
const createEroor=require('http-errors');
const app = express();
const studentsRouter=require('./routes/student.js');
const mongoose=require('mongoose');
//const dbconfig=require('./database/mongodb.json')
const route= express.Router()
mongoose.connect('mongodb://127.0.0.1:27017/StudentDB')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/student',studentsRouter);

 app.use((req, res, next) =>{
      next(createEroor(404));
});


module.exports=app;