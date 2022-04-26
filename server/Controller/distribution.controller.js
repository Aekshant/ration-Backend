const db = require("../../model/index")

exports.aadhaar = async(req,res) => {
    console.log(req.params.num)
    const aadhaar = req.params.num
    const family = await db.family.findOne({where:{aadhaar:aadhaar}})
    
    console.log(family);
    console.log("1");
    if(family != null){
        return res.send({
                    status:true,
                    user:family.id,
                    familyId:family.id,
                    role:"Head"
                })
    }
    // if(!family){
        const member = await db.members.findOne({where:{aadhaar:aadhaar}})
        if(!member){
            return res.send({
                status:false,
                familyId: "not found"
            })
        }
        return res.send({
            status:true,
            user:member.id,
            familyId: member.familyId,
            role:"member"
        })
}