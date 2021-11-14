import dispatcher from "../dispatcher"

export const addUserAction = (user) => {
    dispatcher.dispatch({
        type: 'ADD_USER',
        payload: user,
    });
}