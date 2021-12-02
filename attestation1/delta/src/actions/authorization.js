import { getUserDataApi } from "../api/dummyApi";

const authUserAction = (user) => ({
    type: 'AUTH_FORM/AUTHORIZE_USER',
    user,
});

const cancelUserAction = () => ({
    type: 'AUTH_MENU/CANCEL_USER',
});

export const authorizeUser = (id, errorMessage) => (dispatch) => {
    getUserDataApi(id)
        .then(response => response.id ? 
                    dispatch(authUserAction(response)) 
                : 
                    alert(errorMessage)
            );
}

export const cancelUser = () => (dispatch) => {
    dispatch(cancelUserAction());
}
