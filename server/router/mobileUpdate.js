
const db = require("../../model/index")
const Mobile = db.mobileUpdate;
const router = require("express").Router()
const {sms} = require("../helper/sms.helper")


router.get("/",async(req,res)=>{
    const data = await Mobile.findAll({where:{done:false}})
    if(data){
        res.send({
            status:1,
            data: data
        })
    }else{
        res.send({
            status:0
        })
    }
})

router.get("/:id",(req,res)=>{
    const id = req.params.id
    res.send(id)
})

router.post("/req",async(req,res)=>{
    const body = req.body;
    const data = await Mobile.create(body)
    let message = "your Mobile Number Reset request is sent, Plz visit Nearest Ration Store"
    if(data){
        res.send({status: true})
    }else{
        res.send({
            status:false,
            message:"try again after some time"
        })
    }
})

router.post("/aadhaar", async(req,res)=>{
    const body = req.body;
    const dataCheck = await Mobile.findOne({where:{aadhaar:req.body.aadhaar, done:false}})
    if(dataCheck){
        return res.send({
            status:false,
            message: "Your request is already Being send"
        })
    }
    const data = await db.family.findOne({where:body})
    console.log(data);
    if(data){
        return res.send({
            status:true,
            id: data.id,
            mobile: data.mobile
        })
    }else{
        return res.send({
            status:false,
            message:"Your Aadhar number is not found, Plz Register"
        })
    }
})

router.post("/update",async(req,res)=>{
    const body = req.body;
    const data = await db.family.update({mobile:body.mobile},{where:{aadhaar:body.aadhaar}})
    console.log(data);
    if(data[0]==1){
        res.send({
            status:true,
            data: data
        })
        sms(body.mobile,"Your Mobile number is updated")
    }else{
        res.send({
            status:false,
            message:"try again after some time"
        })
    }
})

router.post("/updatetrue",async(req,res)=>{
    const body = JSON.parse(req.body.aadhaar)
    console.log(body);
    const data = await Mobile.update({done:true},{where:{aadhaar:body}})
    console.log(data);
    if(data[0]==1){
        res.send({
            status:true,
            data: data
        })
    }else{
        res.send({
            status:false,
            message:"try again after some time"
        })
    }
})

module.exports = router


