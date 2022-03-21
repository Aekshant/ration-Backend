const db = require("../../model/index")


exports.aadhaar = async(req,res) => {
    console.log(req.body);
    const aadhaar = req.body.aadhaar
    const family = await db.family.findOne({aadhaar:aadhaar})
    
    console.log(family);
    if(!family){
        const member = await db.family.findOne({aadhaar:aadhaar})
        if(!member){
            return res.send({
                status:true,
                familyId: "not found"
            })
        }
        return res.send({
            status:true,
            user:member.id,
            familyId: member.familyId,
            role:"member"
        })
    }else{
        res.send({
            status:true,
            user:family.id,
            familyId:family.id,
            role:"Head"
        })
    }
}