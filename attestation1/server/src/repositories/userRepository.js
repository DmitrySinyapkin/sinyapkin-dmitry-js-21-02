const api = require('../api/dummyApi');
//const logger = require('../logger');
const format = require('string-format');
const userMapper = require('../mappers/userMapper');
//const { userRepository: messages } = require('../constants/loggerMessages');

class UserRepository {
    getUserList(page, limit) {
        //logger.info(messages.GET_USER_LIST_INVOKE);
        return api.getUserList(page, limit)
            .then(response => {
                //logger.info(format(messages.GET_USER_LIST_REPLY_RESULT, JSON.stringify(response)));
                return response;
            })
            .catch(error => {
                //logger.error(format(messages.GET_USER_LIST_REPLY_ERROR, error));
                return Promise.reject(error);
            })
    }
    getUser(id) {
        //logger.info(messages.GET_USER_INVOKE);
        return api.getUser(id)
            .then(response => {
                //logger.info(format(messages.GET_USER_REPLY_SUCCESS, JSON.stringify(response)));
                const result = userMapper.changeDatesFormat(response);
                //logger.info(format(messages.GET_USER_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                //logger.error(format(messages.GET_USER_REPLY_ERROR, error));
                return Promise.reject(error);
            })
    }
}

module.exports = new UserRepository();
