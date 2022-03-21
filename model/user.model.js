

module.exports =(sequelize,Sequelize)=>{
    const User = sequelize.define("user",{
        name:{
           type: Sequelize.STRING
        },
        mobile_no:{
            type: Sequelize.BIGINT
        },
        aadhar_card:{
            type: Sequelize.BIGINT
        },
        address:{
            type: Sequelize.STRING
        },
        gender:{
            type: Sequelize.ENUM,
            values: ['male', 'female', 'others']
        },
        dob:{
            type:Sequelize.INTEGER
        },
        family_id:{
            type:Sequelize.INTEGER
        },
        role:{
            type: Sequelize.STRING,
            defaultValue: "user"
        },
        familyRole:{
            type: Sequelize.STRING,
            defaultValue: "member"
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
          },
    })
    return User
}