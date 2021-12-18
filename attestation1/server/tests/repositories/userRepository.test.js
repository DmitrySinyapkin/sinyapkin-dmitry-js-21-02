const repository = require('../../src/repositories/userRepository');
const api = require('../../src/api/dummyApi');

describe('getUserList', () => {
    jest.spyOn(api, 'getUserList');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getUserList should return resolved', (done) => {
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
        repository.getUserList()
            .then(result => {
                expect(result).toEqual({
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
                done();
            });
    });

    test('getUserList should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getUserList.mockRejectedValue(errorText);
        repository.getUserList().catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
})

describe('getUser', () => {
    jest.spyOn(api, 'getUser');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('getUser should return resolved', (done) => {
        api.getUser.mockResolvedValue({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '1979-11-25T21:56:06.020Z',
            registerDate: '1979-11-25T21:56:06.020Z',
            updatedDate: '1979-11-25T21:56:06.020Z'
        });
        repository.getUser()
            .then(result => {
                expect(result).toEqual({
                    id: 123,
                    firstName: 'Vasya',
                    lastName: 'Pupkin',
                    dateOfBirth: '26.11.1979',
                    registerDate: '26.11.1979',
                    updatedDate: '26.11.1979'
                });
                done();
            });
    });

    test('getUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.getUser.mockRejectedValue(errorText);
        repository.getUser().catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
})
