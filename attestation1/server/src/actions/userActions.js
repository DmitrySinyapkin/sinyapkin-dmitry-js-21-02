const api = require('../api/dummyApi');

class UserActions {
    addUser(user) {
        api.addUser(user)
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
    updateUser(id, data) {
        api.updateUser(id, data)
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
}

module.exports = new UserActions();
