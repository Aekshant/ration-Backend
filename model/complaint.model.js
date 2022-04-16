

module.exports =(sequelize,Sequelize)=>{
    const Complaint = sequelize.define("complaint",{
        family:{
            type:Sequelize.INTEGER
        },
        subject:{
            type:Sequelize.STRING
        },
        issue:{
            type:Sequelize.STRING
        },
        done:{
            type:Sequelize.BOOLEAN,
            defaultValue: false
        }
    })
    return Complaint
}
