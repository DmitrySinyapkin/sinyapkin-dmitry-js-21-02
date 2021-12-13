const postRepository = require('../repositories/postRepository');

class PostService {
    getPostList(req, res) {
        postRepository.getPostList(req.query.page, req.query.limit)
            .then(response => {
                const result = JSON.stringify(response);
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(520).json(error);
            })
    }
    getPostListByUser(req, res) {
        postRepository.getPostListByUser(req.params.userId, req.query.page, req.query.limit)
            .then(response => {
                const result = JSON.stringify(response);
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(520).json(error);
            })
    }
}

module.exports = new PostService();
