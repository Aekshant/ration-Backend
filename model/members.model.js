




module.exports =(sequelize,Sequelize)=>{
    const Member = sequelize.define("member",{
        name:{
            type:Sequelize.STRING
        },
        aadhaar:{
            type:Sequelize.BIGINT
        },
        dob:{
            type:Sequelize.STRING
        },
        gender:{
            type:Sequelize.STRING
        },
        relation:{
            type:Sequelize.STRING
        },
        familyId:{
            type:Sequelize.INTEGER
        },
        verified:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    })
    return Member;
}
