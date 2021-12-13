const userRepository = require('../repositories/userRepository');
const userActions = require('../actions/userActions');

class UserService {
    getUserList(req, res) {
        userRepository.getUserList(req.query.page, req.query.limit)
            .then(response => {
                const result = JSON.stringify(response);
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(520).json(error);
            })
    }
    getUser(req, res) {
        userRepository.getUser(req.params.id)
            .then(response => {
                const result = JSON.stringify(response);
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(520).json(error);
            })
    }
    addUser(req, res) {
        userActions.addUser(req.body)
            .then(response => {
                const result = JSON.stringify(response);
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(520).json(error);
            })
    }
    updateUser(req, res) {
        userActions.updateUser(req.params.id, req.body)
            .then(response => {
                const result = JSON.stringify(response);
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(520).json(error);
            })
    }
}

module.exports = new UserService;
