const api = require('../api/dummyApi');
const userMapper = require('../mappers/userMapper');

class UserRepository {
    getUserList(page, limit) {
        return api.getUserList(page, limit)
            .then(response => {
                return response;
            })
            .catch(error => {
                Promise.reject(error);
            })
    }
    getUser(id) {
        return api.getUser(id)
            .then(response => {
                const result = userMapper.changeDatesFormat(response);
                return result;
            })
            .catch(error => {
                Promise.reject(error);
            })
    }
}

module.exports = new UserRepository();
