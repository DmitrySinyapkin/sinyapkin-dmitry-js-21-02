const api = require('../api/dummyApi');
const userMapper = require('../mappers/userMapper');

class UserActions {
    addUser(user) {
        api.addUser(userMapper.convertDateToIsoString(user))
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
    updateUser(id, data) {
        api.updateUser(id, userMapper.convertDateToIsoString(data))
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
}

module.exports = new UserActions();
