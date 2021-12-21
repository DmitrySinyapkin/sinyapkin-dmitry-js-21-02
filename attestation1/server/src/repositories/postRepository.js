const api = require('../api/dummyApi');
const postMapper = require('../mappers/postMapper');
const logger = require('../logger');
const format = require('string-format');
const { postRepository: messages} = require('../constants/loggerMessages');

class PostRepository {
    getPostList(page, limit) {
        logger.info(messages.GET_POST_LIST_INVOKE);
        return api.getPostList(page, limit)
            .then(response => {
                logger.info(format(messages.GET_POST_LIST_REPLY_SUCCESS, JSON.stringify(response)));
                const result = postMapper.changeDatesFormat(response);
                logger.info(format(messages.GET_POST_LIST_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                logger.error(format(messages.GET_POST_LIST_REPLY_ERROR, error));
                Promise.reject(error);
            })
    }
    getPostListByUser(id, page, limit) {
        logger.info(messages.GET_POST_LIST_BY_USER_INVOKE);
        return api.getPostListByUser(id, page, limit)
            .then(response => {
                logger.info(format(messages.GET_POST_LIST_BY_USER_REPLY_SUCCESS, JSON.stringify(response)));
                const result = postMapper.changeDatesFormat(response);
                logger.info(format(messages.GET_POST_LIST_BY_USER_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                logger.error(format(messages.GET_POST_LIST_BY_USER_REPLY_ERROR, error));
                Promise.reject(error);
            })
    }
}

module.exports = new PostRepository();
