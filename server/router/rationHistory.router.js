

const db = require("../../model/index")
const Complaint = db.complaint;
const router = require("express").Router()
const Histroy = db.rhistory


router.get("/",async(req,res)=>{
    const data = await Histroy.findAll()
    if(data.length > 0){
        res.send({
            status:true,
            data:data
        })
    }else{
        res.send({
            status:false
        })
    }
})

router.get("/:id", async(req,res) => {
    const id = req.params.id
    const data = await Histroy.findOne({where:{id:id}})
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
})


router.post("/", async(req,res) => {
    const body = req.body
    const data = await Histroy.create(body)
    if(data){
        res.send(true)
    }else{
        res.send(false)
    }
})



module.exports = router;