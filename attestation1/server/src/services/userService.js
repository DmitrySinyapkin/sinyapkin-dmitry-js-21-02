const userRepository = require('../repositories/userRepository');

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
}

module.exports = new UserService;
