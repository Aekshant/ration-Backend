const db = require("../../model/index")
const {sms} = require("../helper/sms.helper")

exports.input = async(req,res)=>{
    const body = req.body.reqData
    const descData = body.value

    if(!body){
        return res.send({
            status:false,
            data: "Try Again, No content" 
        })
    }
    console.log(body);
    const user1 = JSON.stringify(descData[0])
    const user2 =JSON.stringify(descData[1])
    const user3 =JSON.stringify(descData[2])
    const user4 =JSON.stringify(descData[3])
  
      const objData = {
        user_id:body.user.id,
        role:body.user.role,
        family:body.user.family,
        user1: user1,
        user2: user2,
        user3: user3,
        user4: user4
       }
    const data = await db.faceAi.create(objData)
        if(data){
            const mobile = body.mobile
            const message = ` Your Aadhaar number XXXX XXXX 1846
             was successfully get verified using "Face Recognition".`
          const smsSend = await sms(mobile, message)
        return  res.send({
            status:true
            })
        }else{
            return res.send({
                status:false
            })
        }
    
    
  }

exports.userDesc = async(req,res)=>{
    let userData
    let name
    console.log(req.body);
    const user = JSON.parse(req.body.aadhaar)
    console.log(user);
        const nameData = await db.family.findOne({where:{aadhaar:user}})
        if(nameData){
            console.log("nameData1");
            console.log(nameData);
            userData = {
                user_id:nameData.id,
                role:"Head",
                family:nameData.id
            }
            name = nameData.name
            console.log("user");
            console.log(userData);
        }else{
        const nameData = await db.members.findOne({where:{aadhaar:user}})
        console.log("nameData2");
        console.log(nameData);
        if(nameData){
            userData = {
                user_id:nameData.id,
                role:nameData.relation,
                family:nameData.familyId
            }
            console.log(userData);
            name = nameData.name
        }else{
            return res.send({
                status:false,
                data:"user not Found"
            })
        }
       
    }
        
   
    const data = await db.faceAi.findOne({ where:userData})
    console.log(data);
        if(data){
            const descData = data.dataValues
            parseData = {
                user1:JSON.parse(descData.user1),
                user2:JSON.parse(descData.user2),
                user3:JSON.parse(descData.user3),
                user4:JSON.parse(descData.user4)
            }
            return res.send({
                    status: true,
                    userId: name,
                    data: parseData
                })
        }else{
            return res.send({
                    status:false,
                    data:"not Found"
                })
        }
}


exports.update = async(req,res) => {
    const body = req.body.reqData
    const descData = body.value
    if(!body){
        return res.send({
            status:false,
            data: "Try Again, No content" 
        })
    }
    const user1 = JSON.stringify(descData[0])
    const user2 =JSON.stringify(descData[1])
    const user3 =JSON.stringify(descData[2])
    const user4 =JSON.stringify(descData[3])
  
      const objData = {
        user_id:body.user.id,
        role:body.user.role,
        family:body.user.family,
        user1: user1,
        user2: user2,
        user3: user3,
        user4: user4
       }
    const findUser = await db.faceAi.findOne({where:{user_id:body.user.id,role:body.user.role}})
       console.log(findUser.id);
    if(findUser){
        const deleteData = await db.faceAi.destroy({where:{id:findUser.id}})
        console.log(deleteData);
    }
        const created = await db.faceAi.create(objData)
       
        if(created){
            res.send({
                status:true
            })
        }else{
            res.send(false)
        }

}