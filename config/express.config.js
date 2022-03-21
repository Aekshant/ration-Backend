const express = require("express")
const app = express()
const port = 5000
const cors = require('cors')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({limit:'100mb',extended:false}))

app.options('*', cors())
app.use(cors({
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))

const routes = require("../index.route")

app.use("/v1",routes)


module.exports  =   {
    app:app,
    port:port
}