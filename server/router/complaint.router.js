
const db = require("../../model/index")
const Complaint = db.complaint;
const router = require("express").Router()

router.post("/",async(req,res)=>{
    const body = req.body;
    const data = await Complaint.create(body)
    if(data){
        return res.send({
            status: true
        })
    }else{
        return res.send({
            status:false,
            message:"try again after some time"
        })
    }
})



module.exports = router;