const repository = require('../../src/repositories/postRepository');
const api = require('../../src/api/dummyApi');

describe('getPostList', () => {
    jest.spyOn(api, 'getPostList');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getPostList should return resolved', (done) => {
        api.getPostList.mockResolvedValue({
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
        repository.getPostList()
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

    test('getPostList should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getPostList.mockRejectedValue(errorText);
        repository.getPostList().catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
});

describe('getPostListByUser', () => {
    jest.spyOn(api, 'getPostListByUser');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getPostListByUser should return resolved', (done) => {
        api.getPostListByUser.mockResolvedValue({
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
        repository.getPostListByUser()
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

    test('getPostListByUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getPostListByUser.mockRejectedValue(errorText);
        repository.getPostListByUser().catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
});
