import { USER_LIST_URL, APP_ID_FIELD, APP_ID_VALUE } from "../constants/dummyApi"


export const getUserList = (page, limit, callback) => {
    const url = USER_LIST_URL + `?page=${page}&limit=${limit}`
    fetch(url, {
        method: 'GET',
        headers: new Headers({
            [APP_ID_FIELD]: APP_ID_VALUE
        }),
    }).then(response => response.json())
      .then(response => callback(response))
      .catch(console.error);
}
