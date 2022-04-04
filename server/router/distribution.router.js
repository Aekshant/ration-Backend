

const router = require("express").Router()
const { app } = require("faker/lib/locales/en")
const {aadhaar} = require("../Controller/distribution.controller")

router.get("/id/:num",aadhaar)


module.exports = router