const express = require("express")
const { listLocation } = require("../controllers/locations")
const router = express.Router()
router.get("/",listLocation)

module.exports = router
