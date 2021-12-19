const request = require('supertest');
const app = require('../../src/app');
const api = require('../../src/api/dummyApi');

jest.mock('../../src/api/dummyApi');

describe('getComments', () => {
    test('getComments should return comment list', async () => {
        const postId = 123;
        api.getComments.mockResolvedValue({
            data: [
                {
                    id: 123,
                    text: 'blah-blah-blah',
                    publishDate: '2020-11-25T21:56:06.020Z',
                    owner: {
                        name: 'Vasya'
                    }
                },
                {
                    id: 456,
                    text: 'blah-blah-blah',
                    publishDate: '2020-05-24T14:53:17.598Z',
                    owner: {
                        name: 'Arnold'
                    }
                }
            ]
        });
        const result = await request(app)
            .get(`/comment/${postId}`)
            .send();
        expect(result.statusCode).toBe(200);
        expect(result.body).toEqual({
            data: [
                {
                    id: 123,
                    text: 'blah-blah-blah',
                    publishDate: '26.11.2020',
                    owner: {
                        name: 'Vasya'
                    }
                },
                {
                    id: 456,
                    text: 'blah-blah-blah',
                    publishDate: '24.05.2020',
                    owner: {
                        name: 'Arnold'
                    }
                }
            ]
        });
    });

    test('getComments should return error', async () => {
        const postId = 123;
        const errorText = 'Some error';
        api.getComments.mockRejectedValue(errorText);
        const result = await request(app)
            .get(`/comment/${postId}`)
            .send();
        expect(result.statusCode).toBe(520);
        expect(result.text).toEqual(JSON.stringify(errorText));
    });
});
