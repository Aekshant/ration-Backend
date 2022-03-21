

module.exports =(sequelize,Sequelize)=>{
    const Family = sequelize.define("family",{
        name:{
            type: Sequelize.STRING
        },
        aadhaar:{
            type: Sequelize.BIGINT
        },
        address:{
            type: Sequelize.STRING
        },
        income:{
            type:Sequelize.INTEGER
        },
        mobile:{
            type:Sequelize.BIGINT
        },
        otp:{
            type:Sequelize.INTEGER
        },
        gender:{
            type: Sequelize.STRING
        },
        dob:{
            type: Sequelize.STRING
        },
        mobileCheck:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        ration_card_no:{
            type: Sequelize.INTEGER
        },
        verified:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        typeOfCard:{
            type: Sequelize.STRING
        }
    })
    return Family
}