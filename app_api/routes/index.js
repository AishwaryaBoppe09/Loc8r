const express = require("express")
const { listusers, createUsers } = require("../controllers/users")
const router = express.Router()
router.get("/",listusers)
router.post("/",createUsers)

module.exports = router
