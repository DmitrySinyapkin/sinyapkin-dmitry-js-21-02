import { getUserDataApi } from "../api/dummyApi";

const authUserAction = (user) => ({
    type: 'AUTH_FORM/AUTHORIZE_USER',
    user,
});

const cancelUserAction = () => ({
    type: 'AUTH_MENU/CANCEL_USER',
});

export const authorizeUser = (id) => (dispatch) => {
    getUserDataApi(id)
        .then(response => dispatch(authUserAction(response)))
        .catch(error => alert(`Ошибка загрузки: ${error}`));
}

export const cancelUser = () => (dispatch) => {
    dispatch(cancelUserAction());
}
