const fetch = require('node-fetch');
const { USER_LIST_URL, POST_LIST_URL, APP_ID_VALUE, APP_ID_FIELD, GET_METHOD: get, POST_METHOD: post, PUT_METHOD: put } = require('../constants/dummyApi');

const createGetFetch = (url) => {
    return fetch(url, {
        method: get,
        headers: {
            [APP_ID_FIELD]: APP_ID_VALUE
        },
    })
    .then(response => response.json());  
}

const createFetchWithBody = (url, method, data) => {
    return fetch(url, {
        method: method,
        headers: {
            [APP_ID_FIELD]: APP_ID_VALUE,
            'Content-Type': 'application/json'
        },
        body: data,
    })
    .then(response => response.json());
}

module.exports = {
    getUserList: (page, limit) => {
        const url = USER_LIST_URL + `?page=${page}&limit=${limit}`;
        return createGetFetch(url);
    },
    getUser: (id) => {
        const url = USER_LIST_URL + `/${id}`;
        return createGetFetch(url);
    },
    addUser: (user) => {
        const url = USER_LIST_URL + `/create`;
        const userData = JSON.stringify(user);
        return createFetchWithBody(url, post, userData);
    },
    updateUser: (id, data) => {
        const url = USER_LIST_URL + `/${id}`;
        const newData = JSON.stringify(data);
        return createFetchWithBody(url, put, newData);
    },
    getPostList: (page, limit) => {
        const url = POST_LIST_URL + `?page=${page}&limit=${limit}`;
        return createGetFetch(url);
    },
    getPostListByUser: (id, page, limit) => {
        const url = USER_LIST_URL + `/${id}/post?page=${page}&limit=${limit}`;
        return createGetFetch(url);
    },
    getComments: (postId, page, limit) => {
        const url = POST_LIST_URL + `/${postId}/comment?page=${page}&limit=${limit}`;
        return createGetFetch(url);
    },
}
