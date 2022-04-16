const {app, port} = require("./config/express.config")
require("dotenv").config()
const db = require("./model/index")
const http = require("http").createServer(app)
 db.sequelize.sync({ alter: true});


// const io = require("socket.io")(http,{
//     cors: {
//       origin:'*'
//     }
// })


// const ioc = require("socket.io-client")
// let servo = false;
// let loadCheck;
// let socket = ioc.connect("http://127.0.0.1:4000");
// socket.on("loadCell",(data)=>{
//     console.log(`Received ${data}`);
// })
// if(servo === true){
//   socket.emit("servo","true");
// }else{
//    socket.emit("servo","false");
// }


app.get("/",(req,res)=>{
  res.send({
    status:true,
    message:"Ration Card automation System 2021-2022",
    developed_by:"Sankalp Selokar, Rutuja Chikhale, Yash Banode, Kalyan Dahake"
  })
})

app.get("/image",(req,res)=>{
  const path = __dirname+"/public/"+"RationCard.jpg"
  console.log(path);
   res.sendFile(path)
})

const {sms} = require("./server/helper/sms.helper")

app.post('/sms/:id',async(req,res)=>{
  const id = req.params.id
  const message = req.body.message
  const data = db.family.findOne({where:{id:id}})
  if(data){
    const mobile = data.mobile
    const smsSend = await sms(mobile, message)
    return res.send(true)
  }else{
    return res.send(false)
  }  
})


app.post("/image",async(req,res)=>{
  
  const body = req.body.reqData
  const descData = body.value
  //to change array json object type to string
  const user1 = JSON.stringify(descData[0])
  const user2 =JSON.stringify(descData[1])
  const user3 =JSON.stringify(descData[2])
  const user4 =JSON.stringify(descData[3])

    const objData = {
      user_id:body.user,
      user1: user1,
      user2: user2,
      user3: user3,
      user4: user4
     }

  const data = await db.faceAi.create(objData)
  //   if(data){
      res.send({
        status:true,
        data: data
      })
  //   }
})

http.listen(port,()=>{
    console.log(`Server running on ${port}`);
})