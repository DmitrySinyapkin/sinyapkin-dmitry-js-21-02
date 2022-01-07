const repository = require('../../src/repositories/commentRepository');
const api = require('../../src/api/dummyApi');

describe('getComments', () => {
    jest.spyOn(api, 'getComments');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getComments should return resolved', (done) => {
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
        repository.getComments()
            .then(result => {
                expect(result).toEqual({
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
                done();
            });
    });

    test('getComments should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getComments.mockRejectedValue(errorText);
        repository.getComments().catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
});
