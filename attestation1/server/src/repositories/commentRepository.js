const api = require('../api/dummyApi');
const commentMapper = require('../mappers/commentMapper');
//const logger = require('../logger');
const format = require('string-format');
//const { commentRepository: messages} = require('../constants/loggerMessages');

class CommentRepository {
    getComments(id, page, limit) {
        //logger.info(messages.GET_COMMENTS_INVOKE);
        return api.getComments(id, page, limit)
            .then(response => {
                //logger.info(format(messages.GET_COMMENTS_REPLY_SUCCESS, JSON.stringify(response)));
                const result = commentMapper.changeDatesFormat(response);
                //logger.info(format(messages.GET_COMMENTS_REPLY_RESULT, JSON.stringify(result)));
                return result;
            })
            .catch(error => {
                //logger.error(format(messages.GET_COMMENTS_REPLY_ERROR, error));
                return Promise.reject(error);
            })
    }
}

module.exports = new CommentRepository();
