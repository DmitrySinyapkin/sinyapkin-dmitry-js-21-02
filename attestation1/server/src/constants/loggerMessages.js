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

        UPDATE_USER_INVOKE: '[UserActions.updateUser] invoked dummyApi.updateUser user id={} updared data={}',
        UPDATE_USER_REPLY_SUCCESS: '[UserActions.updateUser] reply={}',
        UPDATE_USER_REPLY_ERROR: '[UserActions.updateUser] error={}',
    }
}
