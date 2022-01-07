const actions = require('../../src/actions/userActions');
const api = require('../../src/api/dummyApi');

describe('addUser', () => {
    jest.spyOn(api, 'addUser');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('addUser should return resolved', (done) => {
        api.addUser.mockResolvedValue({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '1979-11-25T21:56:06.020Z',
            registerDate: '1979-11-25T21:56:06.020Z',
            updatedDate: '1979-11-25T21:56:06.020Z'
        });
        actions.addUser( {
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '26.11.1979',
        })
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

    test('addUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.addUser.mockRejectedValue(errorText);
        actions.addUser( {
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '26.11.1979',
        }).catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
})

describe('updateUser', () => {
    jest.spyOn(api, 'updateUser');

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('updateUser should return resolved', (done) => {
        api.updateUser.mockResolvedValue({
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '1979-11-25T21:56:06.020Z',
            registerDate: '1979-11-25T21:56:06.020Z',
            updatedDate: '1979-11-25T21:56:06.020Z'
        });
        actions.updateUser(123, {
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '26.11.1979',
        })
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

    test('updateUser should return rejected with error', (done) => {
        const errorText = 'Api error';
        api.updateUser.mockRejectedValue(errorText);
        actions.updateUser(123, {
            id: 123,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            dateOfBirth: '26.11.1979',
        }).catch(error => {
            expect(error).toEqual(errorText);
        });
        done();
    });
})