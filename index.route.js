const express = require("express")
const router = express.Router()


const family = require("./server/router/family.router")
const faceAi = require("./server/router/faceAi.router")
const members = require("./server/router/members.router")
const vendor = require("./server/router/vendor.router")
const distribution = require("./server/router/distribution.router")

router.use("/family", family)
router.use("/face",faceAi)
router.use("/members",members)
router.use("/vendor",vendor)
router.use("/dist",distribution)

module.exports = router;