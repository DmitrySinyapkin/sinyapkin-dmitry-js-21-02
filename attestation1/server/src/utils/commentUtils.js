const utils = require('../utils/commonUtils');

class CommentUtils {
    changeDatesFormatInSingleComment(comment) {
        return {
            ...comment,
            publishDate: utils.changeDateFormat(comment.publishDate),
        }
    }
}

module.exports = new CommentUtils();
