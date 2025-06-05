const express = require("express")
const { getDetails, addUser} = require("../controllers/user.controller")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


const userRoute = express.Router()


userRoute.get("/",getDetails)
userRoute.post("/addUser",upload.single("image"),addUser)


module.exports = userRoute