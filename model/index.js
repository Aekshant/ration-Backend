const Sequelize = require("sequelize")

const sequelize = new Sequelize("rationcard",'root','1234',{
    host:'localhost',
    dialect:'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize
// db.user = require("./user.model")(sequelize,Sequelize)
db.family = require("./family.model")(sequelize,Sequelize)
db.vendor = require("./vendor.model")(sequelize,Sequelize)
db.faceAi = require("./faceAi.model")(sequelize,Sequelize)
db.otp = require("./otp.model")(sequelize,Sequelize)
db.members = require("./members.model")(sequelize,Sequelize)
db.rhistory = require("./rationDetail.model")(sequelize,Sequelize)
db.stock = require("./stock.model")(sequelize,Sequelize)
db.mobileUpdate = require("./rationDetail.model")(sequelize,Sequelize)

//family and members
db.family.hasMany(db.members,{
    foreignKey:"familyId",
    as:"memData"
})
db.members.belongsTo(db.family,{
    foreignKey:"familyId"
})


module.exports = db;