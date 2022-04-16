const db = require("../../model/index")
const {sms} = require("../helper/sms.helper")



exports.addMembers = async(req,res)=>{
    const body = req.body;
     const familyId = body.id;
    const familyData = body.items
     console.log(familyId); 
    familyData.map((item)=>{
        item.familyId = familyId
        console.log(item);
    })
    console.log(familyData);
   const data = await db.members.bulkCreate(familyData)
    console.log(data);
    res.send("he")
}

exports.getMembers = async(req,res) => {
    const id = req.params.id
    console.log(id);
    const membersData = await db.members.findAll({
        where:{familyId:id},
        include:[db.family]
    })
    if(membersData){
        res.send({
            status:true,
            data:membersData
        })
    }else{
        res.send({
            status:false,
            data:"No Member's Data Found"
        })
    }
}


exports.getMember = async(req,res) => {
    const id = req.params.id
    console.log(id);
    const membersData = await db.members.findOne({where:{id:id}})
    console.log(membersData);
    if(membersData){
        res.send({
            status:true,
            data:membersData
        })
    }else{
        res.send({
            status:false,
            data:"No Member's Data Found"
        })
    }
}

exports.verified = async(req,res) => {
    const data = req.body
    console.log(data);
        const message = "Your Facial Extraction verification is done, Thank you"
        const dataCheck = await db.family.findOne({where:{id:data.family}})
        var mobile = dataCheck.mobile
    if(data.role === "Head"){
        const verify = await db.family.update({verified:true},{where:{id:data.id}})
        if(verify[0]=== 1){
            const smsSend = await sms(mobile, message)
               return res.send({
                    status:true
                })
            }
    }else{
        const verify = await db.members.update({verified:true},{where:{id:data.id}})
        if(verify[0] === 1){
            const smsSend = await sms(mobile, message)
               return res.send({
                    status:true
                })
            }
    }
    res.send({
        status:false
    })
}