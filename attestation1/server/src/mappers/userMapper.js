const userUtils = require('../utils/userUtils');

class UserMapper {
    changeDatesFormat(user) {
        return userUtils.changeDatesFormat(user);
    }
    convertDateToIsoString(user) {
        return userUtils.convertDateToIsoString(user);
    }
}

module.exports = new UserMapper();
