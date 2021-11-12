import { getUserData } from "../api/dummyApi";
import dispatcher from "../dispatcher";

export const loadUserDataAction = (id) => {
    getUserData(id).then(response => dispatcher.dispatch({
        type: 'LOAD_USER_DATA',
        payload: response,
    }));
}