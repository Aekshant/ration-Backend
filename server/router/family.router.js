

const router = require("express").Router()
//controller
const {findAll,findOne,update_user,delete_user,addUser,login,otp,otpDelete} = require("../Controller/family.controller")
const {checkToken} = require("../middleware/jwt.middleware")

//routers
router.get("/",checkToken,  findAll)
router.get("/:id", findOne)
router.post("/mobile",otp)
router.post("/", addUser)
router.post("/login",login)
// router.put("/:id",update_user)
router.delete("/:otp",otpDelete)
// router.delete("/:id",delete_user)


module.exports = router
