const api = require('../api/dummyApi');
const commentMapper = require('../mappers/commentMapper');

class CommentRepository {
    getComments(id, page, limit) {
        return api.getComments(id, page, limit)
            .then(response => {
                const result = commentMapper.changeDatesFormat(response);
                return result;
            })
            .catch(error => {
                Promise.reject(error);
            })
    }
}

module.exports = new CommentRepository();
