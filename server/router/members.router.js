const router = require("express").Router()
const {checkToken} = require("../middleware/jwt.middleware")
const {addMembers,getMembers,getMember, verified} = require("../Controller/members.controller")


router.get("/:id", checkToken, getMembers)
router.get("/cm/:id",checkToken,getMember)
router.post("/" ,addMembers)
router.post("/verify",verified)

module.exports = router