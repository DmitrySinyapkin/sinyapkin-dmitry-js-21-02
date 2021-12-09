const api = require('../api/dummyApi');

class UserRepository {
    getUserList(page, limit) {
        return api.getUserList(page, limit);
    }
}

module.exports = new UserRepository();
