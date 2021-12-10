const api = require('../api/dummyApi');
const userMapper = require('../mappers/userMapper');

class UserRepository {
    getUserList(page, limit) {
        return api.getUserList(page, limit);
    }
    getUser(id) {
        return api.getUser(id)
            .then(resp => {
                const result = userMapper.mapUserDates(resp);
                return result;
            })
            .catch(error => {
                Promise.reject(error);
            })
    }
}

module.exports = new UserRepository();
