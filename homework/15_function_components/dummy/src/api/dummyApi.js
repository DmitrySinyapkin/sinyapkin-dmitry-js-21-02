import { USER_LIST_URL, APP_ID_FIELD, APP_ID_VALUE } from "../constants/dummyApi"

async function createGetFetch(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            [APP_ID_FIELD]: APP_ID_VALUE
        }),
    });
    return await response.json();
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

export const getUserList = (page, limit) => {
    const url = USER_LIST_URL + `?page=${page}&limit=${limit}`;
    return createGetFetch(url);
}

export const getUserData = (id) => {
    const url = USER_LIST_URL + `/${id}`;
    return createGetFetch(url);
}

export const addUser = (user, callback) => {
    const url = USER_LIST_URL + `/create`;
    const userData = JSON.stringify(user);
    createPostFetch(url, userData, callback);
}