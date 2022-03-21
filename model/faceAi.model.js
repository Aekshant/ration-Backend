

module.exports =(sequelize,Sequelize)=>{
    const FaceAi = sequelize.define("faceAi",{
        user_id:{
            type:Sequelize.INTEGER
        },
        role:{
            type:Sequelize.STRING
        },
        family:{
            type:Sequelize.INTEGER
        },
        user1:{
            type: Sequelize.TEXT
        },
        user2:{
            type: Sequelize.TEXT
        },
        user3:{
            type: Sequelize.TEXT
        },
        user4:{
            type: Sequelize.TEXT
        },
    })
    return FaceAi
}