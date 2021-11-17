import { addUser } from "../api/dummyApi";

const addUserAction = (userId) => ({
    type: 'REGFORM/ADD_USER',
    userId,
});

const preventRedirectAction = () => ({
    type: 'REGFORM/PREVENT_REDIRECT'
});

export const setNewUserId = (firstName, lastName, email, title, gender, phone) => (dispatch) => {
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        title: title,
        gender: gender,
        phone: phone
    };

    addUser(user).then(response => dispatch(addUserAction(response.id)));
}

export const preventRedirect = () => (dispatch) => {
    dispatch(preventRedirectAction());
}
