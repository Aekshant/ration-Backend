const fast2sms = require('fast-two-sms')


const sms = async(mobile,message)=>{
    console.log(mobile);
    console.log(message);
    // const options = {authorization : process.env.SMS_KEY  , message : message ,  numbers : [mobile]} 
    // const response = await fast2sms.sendMessage(options)
} 

module.exports = { sms }