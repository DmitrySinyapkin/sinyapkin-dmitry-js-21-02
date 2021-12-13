const api = require('../api/dummyApi');
const postMapper = require('../mappers/postMapper');

class PostRepository {
    getPostList(page, limit) {
        return api.getPostList(page, limit)
            .then(response => {
                const result = postMapper.changeDatesFormat(response);
                return result;
            })
            .catch(error => {
                Promise.reject(error);
            })
    }
    getPostListByUser(id, page, limit) {
        return api.getPostListByUser(id, page, limit)
            .then(response => {
                const result = postMapper.changeDatesFormat(response);
                return result;
            })
            .catch(error => {
                Promise.reject(error);
            })
    }
}

module.exports = new PostRepository();
