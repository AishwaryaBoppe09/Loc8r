const mongoose = require("mongoose")
const location = mongoose.model("Location")


const listLocation = async (req,res) => {
    console.log(req.body) 
    const locations = await location.find()
    res.send({ message: locations })
}
module.exports ={listLocation}