const api = require('../../src/api/dummyApi');
const fetch = require('node-fetch');

jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
    json: () => ({
        data: 'api response',
    })
})));

describe('getUserList', () => {
    test('getUserList should return object', () => {
        expect(api.getUserList()).toEqual(expect.any(Object));
    });

    test('getUserList should call fetch with params', () => {
        const pageParam = 'page';
        const limitParam = 'limit'
        const page = 2;
        const limit = 10;
        api.getUserList(page, limit);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user?${pageParam}=${page}&${limitParam}=${limit}`,
            {method: 'GET', headers: {'app-id': '617d0f3dab5df4b9bd1507dd'}}
        )
    });

    test('getUserList should return promise with response.data', () => {
        const result = api.getUserList(2, 10);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual('api response');
    });
})

describe('getPostList', () => {
    test('getPostList should return object', () => {
        expect(api.getPostList()).toEqual(expect.any(Object));
    });

    test('getPostList should call fetch with params', () => {
        const pageParam = 'page';
        const limitParam = 'limit'
        const page = 2;
        const limit = 10;
        api.getPostList(page, limit);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/post?${pageParam}=${page}&${limitParam}=${limit}`,
            {method: 'GET', headers: {'app-id': '617d0f3dab5df4b9bd1507dd'}}
        )
    });

    test('getPostList should return promise with response.data', () => {
        const result = api.getPostList(2, 10);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual('api response');
    });
})

describe('getPostListByUser', () => {
    test('getPostListByUser should return object', () => {
        expect(api.getPostListByUser()).toEqual(expect.any(Object));
    });

    test('getPostListByUser should call fetch with params', () => {
        const userId = 123;
        const pageParam = 'page';
        const limitParam = 'limit'
        const page = 2;
        const limit = 10;
        api.getPostListByUser(userId, page, limit);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/${userId}/post?${pageParam}=${page}&${limitParam}=${limit}`,
            {method: 'GET', headers: {'app-id': '617d0f3dab5df4b9bd1507dd'}}
        )
    });

    test('getPostListByUser should return promise with response.data', () => {
        const result = api.getPostListByUser(123, 2, 10);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual('api response');
    });
})

describe('getComments', () => {
    test('getComments should return object', () => {
        expect(api.getComments()).toEqual(expect.any(Object));
    });

    test('getComments should call fetch with params', () => {
        const postId = 123;
        const pageParam = 'page';
        const limitParam = 'limit'
        const page = 2;
        const limit = 10;
        api.getComments(postId, page, limit);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/post/${postId}/comment?${pageParam}=${page}&${limitParam}=${limit}`,
            {method: 'GET', headers: {'app-id': '617d0f3dab5df4b9bd1507dd'}}
        )
    });

    test('getComments should return promise with response.data', () => {
        const result = api.getComments(123, 2, 10);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual('api response');
    });
})

jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
    json: () => ({
        id: '123',
        firstName: 'Vasya',
        lastName: 'Pupkin'
    })
})));

describe('getUser', () => {
    test('getUser should return object', () => {
        expect(api.getUser()).toEqual(expect.any(Object));
    });

    test('getUser should call fetch with user id', () => {
        const id = '123'
        api.getUser(id);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/${id}`,
            {method: 'GET', headers: {'app-id': '617d0f3dab5df4b9bd1507dd'}}
        )
    });

    test('getUser should return promise with user data', () => {
        const result = api.getUser(123);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual({
            id: '123',
            firstName: 'Vasya',
            lastName: 'Pupkin'
        });
    });
})

describe('addUser', () => {
    test('addUser should return object', () => {
        expect(api.addUser()).toEqual(expect.any(Object));
    });

    test('addUser should call fetch with new user data ', () => {
        const user = {
            id: '123',
            firstName: 'Vasya',
            lastName: 'Pupkin'
        }
        const stringifyedUser = JSON.stringify(user);
        api.addUser(user);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/create`,
            {method: 'POST', headers: {'app-id': '617d0f3dab5df4b9bd1507dd', 'Content-Type': 'application/json'}, body: stringifyedUser}
        )
    });

    test('addUser should return promise with new user data', () => {
        const result = api.addUser(123);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual({
            id: '123',
            firstName: 'Vasya',
            lastName: 'Pupkin'
        });
    });
})

describe('updateUser', () => {
    test('updateUser should return object', () => {
        expect(api.updateUser()).toEqual(expect.any(Object));
    });

    test('updateUser should call fetch with updated user data ', () => {
        const id = '123';
        const data = {
            firstName: 'Vasya',
            lastName: 'Pupkin'
        }
        const stringifyedData = JSON.stringify(data);
        api.updateUser(id, data);
        expect(fetch).toBeCalledWith(
            `https://dummyapi.io/data/v1/user/${id}`,
            {method: 'PUT', headers: {'app-id': '617d0f3dab5df4b9bd1507dd', 'Content-Type': 'application/json'}, body: stringifyedData}
        )
    });

    test('updateUser should return promise with updated user data', () => {
        const id = '123';
        const data = {
            firstName: 'Vasya',
            lastName: 'Pupkin'
        }
        const result = api.updateUser(id, data);
        expect(result).toEqual(expect.any(Promise));
        expect(result).resolves.toEqual({
            id: '123',
            firstName: 'Vasya',
            lastName: 'Pupkin'
        });
    });
})
