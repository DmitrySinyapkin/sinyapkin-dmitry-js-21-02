import { USER_LIST_URL, APP_ID_FIELD, APP_ID_VALUE, PAGE_FIELD, LIMIT_FIELD } from "../../constants/dummyApi"


export const getUserList = (page, limit, callback) => {
    fetch(USER_LIST_URL, {
        method: 'GET',
        headers: new Headers({
            [APP_ID_FIELD]: APP_ID_VALUE,
            [PAGE_FIELD]: page.toString(),
            [LIMIT_FIELD]: limit.toString(),
        }),
    }).then(response => response.json())
      .then(response => callback(response.data))
      .catch(console.error);
}