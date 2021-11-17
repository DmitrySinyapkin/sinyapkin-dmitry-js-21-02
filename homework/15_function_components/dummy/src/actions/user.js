import { getUserData } from "../api/dummyApi";

const loadUserDataAction = (userData) => ({
        type: 'USER_PAGE/LOAD_USER_DATA',
        userData,
});

export const loadUserData = (id) => (dispatch) => {
        getUserData(id).then(response => dispatch(loadUserDataAction(response)));
}
