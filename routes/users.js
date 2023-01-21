var express = require('express');
var router = express.Router();
const {usersignin,usersignup}=require("../controller/authcontroller");
const { checkDuplicateEmail,validEmail,checkName,checkNumber,checkPassword } = require('../middleware');
router.post('/register',[checkDuplicateEmail,validEmail,checkName,checkNumber,checkPassword],usersignup);
router.post('/check',usersignin);
module.exports = {authroutes:router}
