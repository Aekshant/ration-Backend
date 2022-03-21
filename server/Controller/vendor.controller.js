const db = require("../../model/index")
const jwt = require("jsonwebtoken")
const {sms} = require("../helper/sms.helper")

exports.login = async(req,res) => {
    console.log(req.body);
    const body = req.body
    if(body.mobile){
    const mobile = req.body.mobile
    const check = await db.vendor.findOne({where:{mobile: mobile } })
    
    if(check){
        const otp = Math.floor(1000 + Math.random() * 9000)
        console.log(check.id);
        const updateOtp = await db.vendor.update({otp:otp},{where:{id:check.id}})
        const mobile = body.mobile
        const message = `Your One Time Password for mobile verfication is ${otp}`
       const smsSend = await sms(mobile, message)
        res.send({
            status:true,
            id:check.id
        })
    }else{
        res.send({
            status:false
        })
    }
   }
   if(body.otp){
       const checkOtp = await db.vendor.findOne({where:{id:body.id}})
        console.log(checkOtp.otp);
        const otp = JSON.parse(body.otp)
        if(checkOtp.otp === otp){
            checkOtp.otp = null;
            const token = await jwt.sign({ 
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data : checkOtp.id
        }, "secret" )
            res.send({
                status:true,
                name:checkOtp.name,
                token:token
            })
        }else{
            res.send({
                status:false
            })
        }
   }
}

exports.getOne = async(req,res) => {
    console.log(req.user);
    const getData = await db.vendor.findOne({where:{id:req.user }})
    getData.otp = null
    console.log(getData);
    if(getData){
        res.send({
            status:true,
            id:getData.id,
            data:getData.name
        })
    }
}

exports.add = async(req,res)=>{
    console.log(req.body);
    const data = await db.vendor.create(req.body)
    if(data){
        res.send({
            status:true,
            data:data
        })
    }else{
        res.send({
            status:false
        })
    }
}