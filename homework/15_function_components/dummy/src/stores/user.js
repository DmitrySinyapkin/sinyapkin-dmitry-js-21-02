import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class UserDataStore extends EventEmitter {
    constructor() {
        super();
        this.user = {};
        this.loadUserData = this.loadUserData.bind(this);
        this.getUserData = this.getUserData.bind(this);
    }

    loadUserData = (user) => {
        this.user = {...user};
        this.emit('change');
    }

    getUserData() {
        return this.user;
    }

    handleAction(action) {
        switch (action.type) {
            case 'LOAD_USER_DATA':
                this.loadUserData(action.payload);
                break;
            default:
                // eslint-disable-next-line no-unused-expressions
                () => {};
        }
    }
}

const userDataStore = new UserDataStore();

dispatcher.register(userDataStore.handleAction.bind(userDataStore));

export default userDataStore;