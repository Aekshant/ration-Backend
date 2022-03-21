

module.exports =(sequelize,Sequelize)=>{
    const Otp = sequelize.define("otp",{
        mobile:{
            type:Sequelize.STRING
        },
        otp:{
            type:Sequelize.INTEGER
        }
    })
    return Otp;
}
