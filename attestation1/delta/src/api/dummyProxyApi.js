import { USER_LIST_URL, POST_LIST_URL, COMMENT_LIST_URL, GET_METHOD, POST_METHOD, PUT_METHOD } from "../constants/dummyProxyApi"

async function createGetFetch(url) {
    const response = await fetch(url, {
        method: GET_METHOD,
    });
    return await response.json();
}

async function createFetchWithBody(url, method, data) {
    const response = await fetch(url, {
        method: method,
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: data,
    });
    return await response.json();
}

export const getUserListApi = (page, limit) => {
    const url = USER_LIST_URL + `?page=${page}&limit=${limit}`;
    return createGetFetch(url);
}

export const getUserDataApi = (id) => {
    const url = USER_LIST_URL + `/${id}`;
    return createGetFetch(url);
}

export const addUserApi = (user) => {
    const url = USER_LIST_URL + `/create`;
    const userData = JSON.stringify(user);
    return createFetchWithBody(url, POST_METHOD, userData);
}

export const udateUserApi = (id, data) => {
    const url = USER_LIST_URL + `/${id}`;
    const newData = JSON.stringify(data);
    return createFetchWithBody(url, PUT_METHOD, newData);
}

export const getPostListApi = (page, limit) => {
    const url = POST_LIST_URL + `?page=${page}&limit=${limit}`;
    return createGetFetch(url);
}

export const getPostListByUserApi = (id, page, limit) => {
    const url = POST_LIST_URL + `/${id}?page=${page}&limit=${limit}`;
    return createGetFetch(url);
}

export const getCommentsApi = (postId, page, limit) => {
    const url = COMMENT_LIST_URL + `/${postId}?page=${page}&limit=${limit}`;
    return createGetFetch(url);
}
