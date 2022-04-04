

const router = require("express").Router()
const {getAll,create, getOne, update,deleteStock} = require("../Controller/stock.controller")


router.get("/",getAll)
router.get("/:id",getOne)
router.post("/",create)
router.put("/:id",update)
router.delete("/:id",deleteStock)


module.exports = router