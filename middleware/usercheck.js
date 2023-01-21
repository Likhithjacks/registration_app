const {user}=require("../models")
async function checkDuplicateEmail(req,res,next){
	if(req.body.email){
		const User = await user.findOne({
			where : {
				email:req.body.email
			}
		})
		if(User){
			res.status(400).send({msg : 'email already exist'})
			return;
		}
	}
	next()
}
async function validEmail(req,res,next){
	     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         const email=req.body.email
		 if (email.match(validRegex)) {
            next()
		
		  } else {
			res.status(400).send({msg:"Please enter a valid email address."});
			return
		  }
}

async function checkName(req,res,next){
	var validRegex = /^[a-zA-Z]+$/;
	const firstname=req.body.firstname
    const lastname=req.body.lastname
	if (firstname.match(validRegex) && lastname.match(validRegex)) {
	   next()
	 } 
	 else {
	   res.send({msg:"Please enter a valid name"})
	 }
}
async function checkNumber(req,res,next){
	var validRegex = /^(?=.{10})(?=\d+$)[0-9]*$/;
	const phone=req.body.phone
	console.log(phone)
	if (phone.match(validRegex)) {
	   next()
	 } 
	 else {
	   res.send({msg:"Please enter a valid number."});
	   return
	 }
}
async function checkPassword(req,res,next){
const Pass = req.body.password;
console.log(Pass)
if(Pass.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/)){
  next()
}
	else {
		res.send({msg:"Please enter a valid password."});
		return
	  }
	}


module.exports = {checkDuplicateEmail,validEmail,checkName,checkNumber,checkPassword}