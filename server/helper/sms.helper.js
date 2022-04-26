const fast2sms = require('fast-two-sms')
const moment = require("moment")

const sms = async(mobile,message)=>{
    console.log(mobile);
    console.log(message);
    message= message +"  "+"Time: "+ moment().utcOffset(330).format("MM-DD-YYYY") +" "+ moment().utcOffset(330).format("HH:mm")
    // const options = {authorization : process.env.SMS_KEY  , message : message ,  numbers : [mobile]} 
    // const response = await fast2sms.sendMessage(options)
} 

module.exports = { sms }