const router = require("express").Router()
const { input, userDesc, update} = require("../Controller/faceAi.controller")
const {checkToken} = require("../middleware/jwt.middleware")

router.post("/desc", userDesc)
router.post("/",input)

router.put("/descupdate", update)

module.exports = router