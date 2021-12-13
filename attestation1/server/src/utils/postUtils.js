const utils = require('../utils/commonUtils');

class PostUtils {
    changeDatesFormatInSinglePost(post) {
        return {
            ...post,
            publishDate: utils.changeDateFormat(post.publishDate),
        }
    }
}

module.exports = new PostUtils();
