const request = require('supertest');
const app = require('../../src/app');
const api = require('../../src/api/dummyApi');

jest.mock('../../src/api/dummyApi');

describe('getUserList', () => {
    test('getUserList should return user list', async () => {
        api.getUserList.mockResolvedValue({
            data: [
                {
                    id: 123,
                    firstName: 'Vasya',
                    lastName: 'Pupkin',
                },
                {
                    id: 456,
                    firstName: 'Harley',
                    lastName: 'Davidson'
                }
            ]
        });
        const result = await request(app)
            .get('/user')
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            data: [
                {
                    id: 123,
                    firstName: 'Vasya',
                    lastName: 'Pupkin',
                },
                {
                    id: 456,
                    firstName: 'Harley',
                    lastName: 'Davidson'
                }
            ]
        });
    });

    test('getUserList should return error', async () => {
        const errorText = 'Some error';
        api.getUserList.mockRejectedValue(errorText);
        const result = await request(app)
            .get('/user')
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});

describe('getUser', () => {
    test('getUser should return user data', async () => {
        const id = 123;
        api.getUser.mockResolvedValue({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '1979-11-25T21:56:06.020Z',
            registerDate: '1979-11-25T21:56:06.020Z',
            updatedDate: '1979-11-25T21:56:06.020Z'
        });
        const result = await request(app)
            .get(`/user/${id}`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '26.11.1979',
            registerDate: '26.11.1979',
            updatedDate: '26.11.1979'
        });
    });

    test('getUser should return error', async () => {
        const id = 123;
        const errorText = 'Some error';
        api.getUser.mockRejectedValue(errorText);
        const result = await request(app)
            .get(`/user/${id}`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});

describe('addUser', () => {
    test('addUser should return user data of created user', async () => {
        api.addUser.mockResolvedValue({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '1979-11-25T21:56:06.020Z',
            registerDate: '1979-11-25T21:56:06.020Z',
            updatedDate: '1979-11-25T21:56:06.020Z'
        });
        const result = await request(app)
            .post('/user/create')
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '26.11.1979',
            registerDate: '26.11.1979',
            updatedDate: '26.11.1979'
        });
    });

    test('addUser should return error', async () => {
        const errorText = 'Some error';
        api.addUser.mockRejectedValue(errorText);
        const result = await request(app)
            .post('/user/create')
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});

describe('updateUser', () => {
    test('updateUser should return updated user data', async () => {
        const id = 123;
        api.updateUser.mockResolvedValue({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '1979-11-25T21:56:06.020Z',
            registerDate: '1979-11-25T21:56:06.020Z',
            updatedDate: '1979-11-25T21:56:06.020Z'
        });
        const result = await request(app)
            .put(`/user/${id}`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '26.11.1979',
            registerDate: '26.11.1979',
            updatedDate: '26.11.1979'
        });
    });

    test('updateUser should return error', async () => {
        const id = 123;
        const errorText = 'Some error';
        api.updateUser.mockRejectedValue(errorText);
        const result = await request(app)
            .put(`/user/${id}`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});
