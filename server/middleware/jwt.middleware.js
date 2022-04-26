const jwt  = require("jsonwebtoken")
const { user } = require("../../model/index")
const db = require("../../model/index")

exports.checkToken = async(req,res,next)=>{

    let token = req.get("authorization")
        if(!token){
           return res.send({
                status:false,
                data:"Plz Login again, You are unauthorized"
            })
        }
        console.log(token);
        token = token.slice(7);
    await jwt.verify( token, "secret", (err, decode)=>{
        console.log(err);
        if(decode){
            console.log("decoded");
            console.log(decode);
            console.log(decode.data.id);
            if(typeof decode.data === 'object'){
                req.user = decode.data.id
            }else{
                req.user = decode.data
            }
            next()
            
        }else{
           return res.send({
                status: false,
                data:"Invalid access to this section"
            })
        }
    }) 
}

