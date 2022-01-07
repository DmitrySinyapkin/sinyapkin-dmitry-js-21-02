module.exports = {
    userService: {
        GET_USER_LIST_PARAMS: '[UserService.getUserList] page={} limit={}',
        GET_USER_LIST_SUCCESS: '[UserService.getUserList] success status={} response={}',
        GET_USER_LIST_ERROR: '[UserService.getUserList] error status={} response={}',

        GET_USER_PARAMS: '[UserService.getUser] id={}',
        GET_USER_SUCCESS: '[UserService.getUser] success status={} response={}',
        GET_USER_ERROR: '[UserService.getUser] error status={} response={}',

        ADD_USER_PARAMS: '[UserService.addUser] body={}',
        ADD_USER_SUCCESS: '[UserService.addUser] success status={} response={}',
        ADD_USER_ERROR: '[UserService.addUser] error status={} response={}',

        UPDATE_USER_PARAMS: '[UserService.updateUser] id={} body={}',
        UPDATE_USER_SUCCESS: '[UserService.updateUser] success status={} response={}',
        UPDATE_USER_ERROR: '[UserService.updateUser] error status={} response={}',
    },
    userRepository: {
        GET_USER_LIST_INVOKE: '[UserRepository.getUserList] invoked dummyApi.getUserList',
        GET_USER_LIST_REPLY_ERROR: '[UserRepository.getUserList] error={}',
        GET_USER_LIST_REPLY_RESULT: '[UserRepository.getUserListy] result={}',

        GET_USER_INVOKE: '[UserRepository.getUser] invoked dummyApi.getUser',
        GET_USER_REPLY_SUCCESS: '[UserRepository.getUser] reply={}',
        GET_USER_REPLY_ERROR: '[UserRepository.getUser] error={}',
        GET_USER_REPLY_RESULT: '[UserRepository.getUser] result={}',
    },
    userActions: {
        ADD_USER_INVOKE: '[UserActions.addUser] invoked dummyApi.addUser new user={}',
        ADD_USER_REPLY_SUCCESS: '[UserActions.addUser] reply={}',
        ADD_USER_REPLY_ERROR: '[UserActions.addUser] error={}',
        ADD_USER_REPLY_RESULT: '[UserActions.addUser] result={}',

        UPDATE_USER_INVOKE: '[UserActions.updateUser] invoked dummyApi.updateUser user id={} updated data={}',
        UPDATE_USER_REPLY_SUCCESS: '[UserActions.updateUser] reply={}',
        UPDATE_USER_REPLY_ERROR: '[UserActions.updateUser] error={}',
        UPDATE_USER_REPLY_RESULT: '[UserActions.updateUser] result={}',
    },
    postService: {
        GET_POST_LIST_PARAMS: '[PostService.getPostList] page={} limit={}',
        GET_POST_LIST_SUCCESS: '[PostService.getPostList] success status={} response={}',
        GET_POST_LIST_ERROR: '[PostService.getPostList] error status={} response={}',

        GET_POST_LIST_BY_USER_PARAMS: '[PostService.getPostListByUser] user id={} page={} limit={}',
        GET_POST_LIST_BY_USER_SUCCESS: '[PostService.getPostListByUser] success status={} response={}',
        GET_POST_LIST_BY_USER_ERROR: '[PostService.getPostListByUser] error status={} response={}',
    },
    postRepository: {
        GET_POST_LIST_INVOKE: '[PostRepository.getPostList] invoked dummyApi.getPostList',
        GET_POST_LIST_REPLY_SUCCESS: '[PostRepository.getPostList] reply={}',
        GET_POST_LIST_REPLY_ERROR: '[PostRepository.getPostList] error={}',
        GET_POST_LIST_REPLY_RESULT: '[PostRepository.getPostList] result={}',

        GET_POST_LIST_BY_USER_INVOKE: '[PostRepository.getPostListByUser] invoked dummyApi.getPostListByUser',
        GET_POST_LIST_BY_USER_REPLY_SUCCESS: '[PostRepository.getPostListByUser] reply={}',
        GET_POST_LIST_BY_USER_REPLY_ERROR: '[PostRepository.getPostListByUser] error={}',
        GET_POST_LIST_BY_USER_REPLY_RESULT: '[PostRepository.getPostListByUser] result={}',
    },
    commentService: {
        GET_COMMENTS_PARAMS: '[CommentService.getComments] post id={} page={} limit={}',
        GET_COMMENTS_SUCCESS: '[CommentService.getComments] success status={} response={}',
        GET_COMMENTS_ERROR: '[CommentService.getComments] error status={} response={}',
    },
    commentRepository: {
        GET_COMMENTS_INVOKE: '[CommentRepository.getComments] invoked dummyApi.getComments',
        GET_COMMENTS_REPLY_SUCCESS: '[CommentRepository.getComments] reply={}',
        GET_COMMENTS_REPLY_ERROR: '[CommentRepository.getComments] error={}',
        GET_COMMENTS_REPLY_RESULT: '[CommentRepository.getComments] result={}',
    },
}
