
const mongoose = require("mongoose")
const user = mongoose.model("User")


const listusers = async (req,res) => {
    console.log(req.body) 
    const users = await user.find()
    res.send({ message: users })
}

const createUsers = async (req,res) => {
    console.log(req.body) 
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const users = await user.create({name,email,password})
    res.send({ message: users } )
}
module.exports = {listusers,createUsers}
 