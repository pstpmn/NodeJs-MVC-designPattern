const studentsModel = require('./../models/students');


module.exports.getUserInfoAll = async (req, res) => {
    redisClient.get('users', async (error, data) => {
        if (data) {
            return res.send(data);
        } else {
            let usersInfo = JSON.stringify(await studentsModel.findAll());
            redisClient.set('users', usersInfo);
            return res.send(usersInfo);
        }
    });
}



module.exports.setAddUser = async (req, res) => {
    studentsModel.add();
}


