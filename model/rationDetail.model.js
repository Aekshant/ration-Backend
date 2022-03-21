

module.exports =(sequelize,Sequelize)=>{
    const Rhistory = sequelize.define("rhistory",{
        name:{
            type:Sequelize.STRING
        },
        amount:{
            type:Sequelize.INTEGER
        },
        date:{
            type:Sequelize.STRING
        },
        time:{
            type:Sequelize.STRING
        },
        paymentType:{
            type:Sequelize.INTEGER
        },
        familyId:{
            type:Sequelize.INTEGER
        }
    })
    return Rhistory
}
