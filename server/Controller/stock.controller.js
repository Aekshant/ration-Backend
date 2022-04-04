const db = require("../../model/index")
const Stock = db.stock


exports.getAll =async(req,res) =>{
    const data = await Stock.findAll({})
    if(data[0]){
        res.send({
            status:1,
            data:data
        })
    }else{
        res.send({
            status:1,
            message:"no data found"
        })
    }
}

exports.getOne =async(req,res) =>{
    const stockId = req.params.id
    const data = await Stock.findOne({where:{id:stockId}})
    if(data){
        res.send({
            status:1,
            data:data
        })
    }else{
        res.send({
            status:1,
            message:"no data found"
        })
    }
}

exports.create = async(req,res) => {
    const body = req.body
    if(!body){
        return res.send({
            status:1,
            message:"enter data"
        })
    }
    const data = await Stock.create(body)
    if(data){
        res.send({
            status:1,
            data:data
        })
    }else{
        return res.send({
            status:1,
            message: "try again stock not get created"
        })
    }
}

exports.update = async(req,res) => {
    const stockId = req.params.id
    const body = req.body
    if(!body){
        return res.send({
            status:1,
            message:"enter data"
        })
    }
    const data = await Stock.update(body,{where:{id:stockId}})
    if(data[0] ===1){
        res.send({
            status:1,
            message: "Stock got updated"
        })
    }else{
        res.send({
            status:1,
            message: "Stock not found"
        })
    }
}

exports.deleteStock = async(req,res) => {
    const stockId = req.params.id
    const data = await Stock.destroy({where:{id:stockId}})
    if(data ===1){
        res.send({
            status:1,
            message: "stock got deleted"
        })
    }else{
        res.send({
            status:1,
            message: "stock not get deleted"
        })
    }
}