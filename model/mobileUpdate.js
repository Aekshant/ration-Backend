

module.exports =(sequelize,Sequelize)=>{
    const MobileUpdate = sequelize.define("mobileupdate",{
        aadhaar:{
            type:Sequelize.STRING
        },
        mobile:{
            type:Sequelize.BIGINT
        },
        done:{
            type:Sequelize.BOOLEAN,
            defaultValue: false
        }
    })
    return MobileUpdate
}
