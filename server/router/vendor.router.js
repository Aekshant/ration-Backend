const router = require("express").Router()
const {login,add,getOne} = require("../Controller/vendor.controller")
const {checkToken} = require("../middleware/jwt.middleware")

router.get("/", checkToken, getOne)
router.post("/",add)
router.post("/login",login)


module.exports = router