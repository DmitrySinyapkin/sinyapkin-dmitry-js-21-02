const commentRepository = require('../repositories/commentRepository');

class CommentService {
    getComments(req, res) {
        commentRepository.getComments(req.params.postId, req.query.page, req.query.limit)
            .then(response => {
                const result = JSON.stringify(response);
                res.status(200).send(result);
            })
            .catch(error => {
                res.status(520).json(error);
            })
    }
}

module.exports = new CommentService();
