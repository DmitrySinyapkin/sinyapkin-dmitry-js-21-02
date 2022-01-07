const commentUtils = require('../utils/commentUtils');

class CommentMapper {
    changeDatesFormat(commentList) {
        return {
            ...commentList,
            data: commentList.data.map(comment => commentUtils.changeDatesFormatInSingleComment(comment)),
        }
    }
}

module.exports = new CommentMapper();
