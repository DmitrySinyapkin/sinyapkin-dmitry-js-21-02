import { getUserList } from "../api/dummyApi";

const loadUserListAction = (userList) => ({
    type: 'USER_LIST/LOAD_USER_LIST',
    userList,
});

export const loadUserList = (page, limit) => (dispatch) => {
    getUserList(page, limit)
        .then(response => dispatch(loadUserListAction(response)));
}
