

module.exports =(sequelize,Sequelize)=>{
    const Stock = sequelize.define("stock",{
        name:{
            type:Sequelize.STRING
        },
        price:{
            type:Sequelize.INTEGER
        },
        quantity:{
            type:Sequelize.INTEGER
        },
        maxIncome:{
            type:Sequelize.INTEGER
        },
        vendorId:{
            type:Sequelize.INTEGER
        }
    })
    return Stock
}
