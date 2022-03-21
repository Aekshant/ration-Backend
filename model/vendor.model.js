

module.exports =(sequelize,Sequelize)=>{
    const Vendor = sequelize.define("vendor",{
        name:{
            type:Sequelize.STRING
        },
        mobile:{
            type:Sequelize.BIGINT
        },
        otp:{
            type:Sequelize.INTEGER
        }
    })
    return Vendor
}
