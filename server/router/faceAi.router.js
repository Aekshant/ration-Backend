const router = require("express").Router()
const { input, userDesc} = require("../Controller/faceAi.controller")
const {checkToken} = require("../middleware/jwt.middleware")

router.post("/desc", userDesc)
router.post("/",input)


module.exports = router