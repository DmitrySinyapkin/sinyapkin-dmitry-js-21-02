import { getUserData } from "../api/dummyApi";
import dispatcher from "../dispatcher";

export const loadUserDataAction = (id) => {
    let user = {};
    getUserData(id, (response) => {
                        user.id = response.id;
                        user.firstName = response.firstName;
                        user.lastName = response.lastName
                        user.title = response.title;
                        user.gender = response.gender;
                        user.email = response.email;
                        user.dateOfBirth = response.dateOfBirth;
                        user.registerDate = response.registerDate;
                        user.phone = response.phone;
                        user.picture = response.picture;
                    });
    dispatcher.dispatch({
        type: 'LOAD_USER_DATA',
        payload: user,
    });
}