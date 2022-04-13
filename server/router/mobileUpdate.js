const { app } = require("faker/lib/locales/en")
const db = require("../../model/index")
const Mobile = db.mobileupdate;
const router = require("express").Router()



router.get("/",async(req,res)=>{
    const data = await Mobile.findAll()
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
    if(data){
        res.send({status: success})
    }
})

router.put("/update/:id",async(req,res)=>{
    const body = req.body;
    const id = req.params.id
    const data = await db.family.update(body,{where:{id:id}})
    if(data[0]==1){
        res.send({
            status:1,
            data: data
        })
    }
})

module.exports = router


