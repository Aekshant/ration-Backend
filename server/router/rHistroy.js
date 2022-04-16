
const db = require("../../model/index")
const History = db.rhistory;
const router = require("express").Router()
const {sms} = require("../helper/sms.helper")

router.get("/:id", async(req,res)=>{
    const id = req.params.id
    const data = await History.findAll({where:{familyId: id}})
    if(data.length != 0){
        return res.send({
            status:true,
            data:data
        })
    }else{
        return res.send({
            status:false
        })
    }
})

router.post("/", async(req,res)=>{
    const body = req.body
    const data = await History.create(body)
    if(body){
        res.send({
            status: true
        })
        // const smsSend = await sms(mobile, message)
    }else{
        res.send({
            status: true
        })
    }
})


module.exports = router