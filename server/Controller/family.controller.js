const {family} = require("../../model/index")
const db = require("../../model/index")
const {sms} = require("../helper/sms.helper")
const jwt = require("jsonwebtoken")

exports.findAll = async(req,res) =>{
    const data = await family.findAll({
        })
    if(!data)  {
        return res.send({ status:true, data: "Not Exists" })
    }//name mobile typeofcard verification
    // console.log(data);
    
    res.send({ statu:true, data: data })
}

exports.login = async(req, res) => {
    const body = req.body
    console.log(body);
    //name 
    if(body.mobile){
        const data = await db.family.findOne( {
            where : { mobile:body.mobile}})
           if(!data){
             return  res.send({
                   status: false,
                   message: "User is not registered, plz registered"
               })
           }
           console.log(data.id);
       const otp = Math.floor(1000 + Math.random() * 9000)
       const otpUpdate = db.family.update({otp:otp},{where:{id:data.id}})
       const mobile = body.mobile
       const message = `Your One Time Password for mobile verfication is ${otp}`
      const smsSend = await sms(mobile, message)
       data.otp=null
       console.log(data.otp);
       console.log(data.id);
       
            res.send({
                status:true,
                id:data.id
            })
        
    }
    if(body.otp){
        const id = body.id
        const data = await db.family.findOne({ where:{id:id}})
        console.log(data.otp);

        if(body.otp != data.otp){
            res.send({
                status: false,
                message:"Please Enter Correct Otp"
            })
        }else{
            data.otp = null;

            const token = await jwt.sign({ 
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data : data
        }, "secret" )
      
            res.send({
                status: true,
                token:token
            })
        }
    }
    
    
}

exports.findOne = async(req,res) =>{
    const userId = req.params.id
    console.log(userId);
    const data = await db.family.findOne( {
        where:{id:userId},
    })
    if(!data)  return res.send({ status:true, data: "Not Exists" })
    res.send({ statu:true, data: data })
}

exports.addUser = async(req,res) =>{
    const body = req.body
    console.log(body);
    
     const ration_card = Math.floor(1000 + Math.random() * 9000)
    const income = JSON.parse(body.income)
        if(income > 100000){
            var typeOfCard = "White"

        }else if(income < 60000){
            typeOfCard = "Yellow"

        }else{
            typeOfCard = "Orange"
        }
        body.ration_card_no = ration_card
        body.typeOfCard = typeOfCard;
        console.log(body);
        const dbSave = await family.create(body)
        console.log(dbSave.id);
        if(dbSave){
            res.send({
                status:true,
                data: dbSave.id
            })
        }else{
            res.send({
                status:false
            })
        }
   
}

exports.update_user = async(req,res) =>{
    const user_id = req.params.id
    const objData = req.body
    const data = await user.update(objData,{where:{id:user_id}})
    res.send({
        status: true,
        message:"updated"
    })
}

exports.delete_user = async(req,res) =>{
    const user_id = req.params.id
    const data = await user.destroy({where:{id:user_id}})
    res.send({
        status: true,
        message:"deleted"
    })
}

exports.otp = async(req,res) => {
    console.log(req.body);
    const body = req.body
    if(body.mobile){
        const otp = Math.floor(1000 + Math.random() * 9000)
        const objData = {
                mobile:body.mobile,
                otp:otp
            }
            if(objData){
                const mobile = body.mobile
                const message = `Your One Time Password for mobile verfication is ${otp}`
               const smsSend = await sms(mobile, message)
                const data = await db.otp.create(objData)
                data.otp = null
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
    }
    if(body.id){
        const otpCheck = await db.otp.findOne({where:{id:body.id}})
        console.log(otpCheck.otp);
        const parseOtp = JSON.parse(body.otp)
        if(otpCheck){
            if(otpCheck.otp == parseOtp){
                res.send({
                    status:true
                })
            }else{
                res.send({
                    status:false,
                    message:"You have entered Invalid OTP"
                })
            }
        }
        else{
            res.send({
                status:false
            })
        }
    }
}

exports.otpDelete = (req,res) =>{
    const id = req.params.otp
    console.log(id);
    db.otp.destroy({where:{id:id}})
    .then((data)=>{
        res.send("deleted")
    })
}


