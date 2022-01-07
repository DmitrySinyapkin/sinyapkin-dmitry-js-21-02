const postUtils = require('../utils/postUtils');

class PostMapper {
    changeDatesFormat(postList) {
        return {
            ...postList,
            data: postList.data.map(post => postUtils.changeDatesFormatInSinglePost(post)),
        }
    }
}

module.exports = new PostMapper();
