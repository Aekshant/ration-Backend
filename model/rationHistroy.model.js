

module.exports =(sequelize,Sequelize)=>{
    const Rhistory = sequelize.define("rhistory",{
        amount:{
            type:Sequelize.INTEGER
        },
        paymentType:{
            type:Sequelize.STRING,
            defaultValue: "Offline"
        },
        familyId:{
            type:Sequelize.INTEGER
        }
    })
    return Rhistory
}
