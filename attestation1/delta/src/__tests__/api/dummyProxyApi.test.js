import { getPostListApi, getPostListByUserApi, getCommentsApi, getUserListApi, getUserDataApi, addUserApi, udateUserApi } from "../../api/dummyProxyApi";

beforeEach(() => {
    fetch.resetMocks();
});

describe('getUserListApi', () => {
    test('should call fetch with correct url and options', () => {
        const response = {
            data: [
                { user: '1' },
                { user: '2' },
                { user: '3' },
            ],
            total: 3
        };
        const url = 'http://127.0.0.1:8080/user?page=2&limit=10';
        const options = { method: 'GET' };
        fetch.mockResponse(JSON.stringify(response));
        getUserListApi(2, 10);
        expect(fetch).toBeCalledWith(url, options);
    });

    test('should return response', (done) => {
        const fetchResponse = {
            data: [
                { user: '1' },
                { user: '2' },
                { user: '3' },
            ],
            total: 3
        };
        fetch.mockResponse(JSON.stringify(fetchResponse));
        getUserListApi(2, 10).then(response => {
            expect(response).toBe(fetchResponse);
        });
        done();
    });
});

describe('getUserDataApi', () => {
    test('should call fetch with correct url and options', () => {
        const response = {
            firstName: 'Vasya',
            lastName: 'Pupkin'
        };
        const id = '123';
        const url = 'http://127.0.0.1:8080/user/123';
        const options = { method: 'GET' };
        fetch.mockResponse(JSON.stringify(response));
        getUserDataApi(id);
        expect(fetch).toBeCalledWith(url, options);
    });

    test('should return response', (done) => {
        const fetchResponse = {
            firstName: 'Vasya',
            lastName: 'Pupkin'
        };
        const id = '123';
        fetch.mockResponse(JSON.stringify(fetchResponse));
        getUserDataApi(id).then(response => {
            expect(response).toBe(fetchResponse);
        });
        done();
    });
});

describe('addUserApi', () => {
    test('should call fetch with correct url and options', () => {
        const user = {
            firstName: 'Vasya',
            lastName: 'Pupkin'
        };
        const url = 'http://127.0.0.1:8080/user/create';
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        };
        fetch.mockResponse(JSON.stringify(user));
        addUserApi(user);
        expect(fetch).toBeCalledWith(url, options);
    });

    test('should return response', (done) => {
        const user = {
            firstName: 'Vasya',
            lastName: 'Pupkin'
        };
        fetch.mockResponse(JSON.stringify(user));
        addUserApi(user).then(response => {
            expect(response).toBe(user);
        });
        done();
    });
});

describe('updateUserApi', () => {
    test('should call fetch with correct url and options', () => {
        const id = '123';
        const data = {
            firstName: 'Vasya',
            lastName: 'Pupkin'
        };
        const url = 'http://127.0.0.1:8080/user/123';
        const options = {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        };
        fetch.mockResponse(JSON.stringify(data));
        udateUserApi(id, data);
        expect(fetch).toBeCalledWith(url, options);
    });

    test('should return response', (done) => {
        const id = '123';
        const data = {
            firstName: 'Vasya',
            lastName: 'Pupkin'
        };
        const fetchResponse = {...data, id};
        fetch.mockResponse(JSON.stringify(fetchResponse));
        udateUserApi(id, data).then(response => {
            expect(response).toBe(fetchResponse);
        });
        done();
    });
});

describe('getPostListApi', () => {
    test('should call fetch with correct url and options', () => {
        const response = {
            data: [
                { text: '1' },
                { text: '2' },
                { text: '3' },
            ],
            total: 3
        };
        const url = 'http://127.0.0.1:8080/post?page=2&limit=10';
        const options = { method: 'GET' };
        fetch.mockResponse(JSON.stringify(response));
        getPostListApi(2, 10);
        expect(fetch).toBeCalledWith(url, options);
    });

    test('should return response', (done) => {
        const fetchResponse = {
            data: [
                { text: '1' },
                { text: '2' },
                { text: '3' },
            ],
            total: 3
        };
        fetch.mockResponse(JSON.stringify(fetchResponse));
        getPostListApi(2, 10).then(response => {
            expect(response).toBe(fetchResponse);
        });
        done();
    });
});

describe('getPostListByUserApi', () => {
    test('should call fetch with correct url and options', () => {
        const id = '123';
        const response = {
            data: [
                { text: '1' },
                { text: '2' },
                { text: '3' },
            ],
            total: 3
        };
        const url = 'http://127.0.0.1:8080/post/123?page=2&limit=10';
        const options = { method: 'GET' };
        fetch.mockResponse(JSON.stringify(response));
        getPostListByUserApi(id, 2, 10);
        expect(fetch).toBeCalledWith(url, options);
    });

    test('should return response', (done) => {
        const id = '123';
        const fetchResponse = {
            data: [
                { text: '1' },
                { text: '2' },
                { text: '3' },
            ],
            total: 3
        };
        fetch.mockResponse(JSON.stringify(fetchResponse));
        getPostListByUserApi(id, 2, 10).then(response => {
            expect(response).toBe(fetchResponse);
        });
        done();
    });
});

describe('getCommentsApi', () => {
    test('should call fetch with correct url and options', () => {
        const postId = '123';
        const response = {
            data: [
                { text: '1' },
                { text: '2' },
                { text: '3' },
            ],
            total: 3
        };
        const url = 'http://127.0.0.1:8080/comment/123?page=2&limit=10';
        const options = { method: 'GET' };
        fetch.mockResponse(JSON.stringify(response));
        getCommentsApi(postId, 2, 10);
        expect(fetch).toBeCalledWith(url, options);
    });

    test('should return response', (done) => {
        const postId = '123';
        const fetchResponse = {
            data: [
                { text: '1' },
                { text: '2' },
                { text: '3' },
            ],
            total: 3
        };
        fetch.mockResponse(JSON.stringify(fetchResponse));
        getCommentsApi(postId, 2, 10).then(response => {
            expect(response).toBe(fetchResponse);
        });
        done();
    });
});
