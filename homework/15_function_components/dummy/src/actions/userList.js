import { getUserList } from '../api/dummyApi';
import dispatcher from '../dispatcher';

export const loadUserListAction = (page, limit) => {
    getUserList(page, limit).then(response => dispatcher.dispatch({
        type: 'LOAD_USER_LIST',
        payload: response,
    }));
}