var express = require('express');
const student = require('../models/student');
var router = express.Router();
const service=require('../services/student')

router.post('/add',service.save);


router.get('/get',service.getall );
router.get('/getage',service.getbyage );

router.get('/get/:name',service.getbyname)


router.get('/:id',service.update)
router.get('/d/:id',service.delet)

router.get('/dage',service.deletbyage)


router.get('/note',service.updatenote)



   module.exports=router