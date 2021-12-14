const api = require('../api/dummyApi');
const userMapper = require('../mappers/userMapper');
const logger = require('../logger');
const format = require('string-format');
const { userActions: messages } = require('../constants/loggerMessages');

class UserActions {
    addUser(user) {
        logger.info(format(messages.ADD_USER_INVOKE, JSON.stringify(user)));
        api.addUser(userMapper.convertDateToIsoString(user))
            .then(response => {
                logger.info(format(messages.ADD_USER_REPLY_SUCCESS, JSON.stringify(response)));
                return response;
            })
            .catch(error => {
                logger.error(format(messages.ADD_USER_REPLY_ERROR, error));
                return Promise.reject(error);
            })
    }
    updateUser(id, data) {
        logger.info(format(messages.UPDATE_USER_INVOKE, id, JSON.stringify(data)));
        api.updateUser(id, userMapper.convertDateToIsoString(data))
            .then(response => {
                logger.info(format(messages.UPDATE_USER_REPLY_SUCCESS, JSON.stringify(response)));
                return response;
            })
            .catch(error => {
                logger.error(format(messages.ADD_USER_REPLY_ERROR, error));
                return Promise.reject(error);
            })
    }
}

module.exports = new UserActions();
