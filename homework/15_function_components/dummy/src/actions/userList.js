import { getUserList } from '../api/dummyApi';
import dispatcher from '../dispatcher';

export const loadUserListAction = (page, limit) => {
    let users = [];
    getUserList(page, limit, (response) => users.push(...response.data));
    dispatcher.dispatch({
        type: 'LOAD_USER_LIST',
        payload: users,
    });
}