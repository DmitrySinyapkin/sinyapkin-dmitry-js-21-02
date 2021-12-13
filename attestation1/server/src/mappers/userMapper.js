const utils = require('../utils/commonUtils');

class UserMapper {
    changeDatesFormat(user) {
        return {
            ...user,
            dateOfBirth: utils.changeDateFormat(user.dateOfBirth),
            registerDate: utils.changeDateFormat(user.registerDate),
        }
    }
}

module.exports = new UserMapper();
