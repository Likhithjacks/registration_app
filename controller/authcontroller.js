const {user} = require('../models')
const bcrypt=require("bcryptjs")
async function usersignup(req,res){
  const FirstName=req.body.firstname
  const LastName=req.body.lastname
  const Email=req.body.email
  const Phone=req.body.phone
  const password=req.body.password
  if(FirstName==undefined || LastName==undefined || password==undefined || Email==undefined || 
    FirstName=="" || LastName=="" || password=="" || Email=="" || Phone==undefined || Phone==""){
		res.status(401).send({ message: "Fill all Fields" });
		return
  }
  else{
    const Password=bcrypt.hashSync(req.body.password,8)
		const User = await user.create({FirstName,LastName,Email,Password,Phone})
		res.redirect("/login")
		return
}
}
async function usersignin(req,res){
    const Email=req.body.email
    const Password=req.body.password
	try{
		const User = await user.findOne({
			where : {
				Email : Email
			}
		})
		if(User){
			const validPassword = bcrypt.compareSync(Password,User.Password)
			if(!validPassword){
				res.status(400).send({msg : 'Username/password is not correct'})
			}
			else{
				res.redirect("/welcome")
			}
		}
		else{
			res.status(400).send({msg : 'Username/password is not correct'})	
		}
	}catch(err){
		res.status(500).send({msg : 'Internal Server Error', err})
	}
}
module.exports={usersignup,usersignin}