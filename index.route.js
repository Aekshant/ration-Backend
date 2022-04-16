const express = require("express")
const router = express.Router()


const family = require("./server/router/family.router")
const faceAi = require("./server/router/faceAi.router")
const members = require("./server/router/members.router")
const vendor = require("./server/router/vendor.router")
const distribution = require("./server/router/distribution.router")
const stock = require("./server/router/stock.router")
const mobileUpdate = require("./server/router/mobileUpdate")
const complaint = require("./server/router/complaint.router")
const rhistory = require("./server/router/rHistroy")

router.use("/family", family)
router.use("/face",faceAi)
router.use("/members",members)
router.use("/vendor",vendor)
router.use("/dist",distribution)
router.use("/stock",stock)
router.use("/mobile",mobileUpdate)
router.use("/complaint", complaint)
router.use("/histroy", rhistory)

module.exports = router;