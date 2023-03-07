const express=require("express"); // express est un framework
const logger = require('morgan');
const createError = require('http-errors');
const mongoose =  require('mongoose'); // mongoose est un orm
const dbConfig = require('./database/mongodb.json')



const contactsRouter = require('./routes/contacts.js');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/contact', contactsRouter);



app.use((req, res, next)=>{
    next(createError(404));
})

mongoose.connect(dbConfig.mongo.uri);
app.set('view engine', 'twig');

module.exports =app;