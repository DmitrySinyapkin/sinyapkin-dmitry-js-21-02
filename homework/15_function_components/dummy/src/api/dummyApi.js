import { USER_LIST_URL, APP_ID_FIELD, APP_ID_VALUE } from "../constants/dummyApi"

function createGetFetch(url, callback) {
    fetch(url, {
        method: 'GET',
        headers: new Headers({
            [APP_ID_FIELD]: APP_ID_VALUE
        }),
    }).then(response => response.json())
      .then(response => callback(response))
      .catch(console.error);
}

function createPostFetch(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: new Headers({
            [APP_ID_FIELD]: APP_ID_VALUE,
            'Content-Type': 'application/json;charset=utf-8'
        }),
        body: data,
    }).then(response => response.json())
      .then(response => callback(response))
      .catch(console.error);
}

export const getUserList = (page, limit, callback) => {
    const url = USER_LIST_URL + `?page=${page}&limit=${limit}`;
    createGetFetch(url, callback);
}

export const getUserData = (id, callback) => {
    const url = USER_LIST_URL + `/${id}`;
    createGetFetch(url, callback);
}

export const addUser = (user, callback) => {
    const url = USER_LIST_URL + `/create`;
    const userData = JSON.stringify(user);
    createPostFetch(url, userData, callback);
}