import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class UserListStore extends EventEmitter {
    constructor() {
        super();
        this.users = [];
        this.loadUserList = this.loadUserList.bind(this);
        this.getUserList = this.getUserList.bind(this);
    }

    loadUserList = (users) => {
        this.users = [...users];
        this.emit('change');
    }

    getUserList() {
        return this.users;
    }

    handleAction(action) {
        switch (action.type) {
            case 'LOAD_USER_LIST':
                this.loadUserList(action.payload);
                break;
            default:
                // eslint-disable-next-line no-unused-expressions
                () => {};
        }
    }
}

const userListStore = new UserListStore();

dispatcher.register(userListStore.handleAction.bind(userListStore));

export default userListStore;