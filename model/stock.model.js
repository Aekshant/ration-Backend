

module.exports =(sequelize,Sequelize)=>{
    const Stock = sequelize.define("stock",{
        name:{
            type:Sequelize.STRING
        },
        orangeCardQuantity:{
            type:Sequelize.FLOAT
        },
        yellowCardQuantity:{
            type:Sequelize.FLOAT
        },
        orangeCardPrice:{
            type:Sequelize.INTEGER
        },
        yellowCardPrice:{
            type:Sequelize.INTEGER
        }
    })
    return Stock
}
