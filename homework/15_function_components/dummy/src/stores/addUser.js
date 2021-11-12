import { EventEmitter } from 'events';
import { addUser } from '../api/dummyApi';
import dispatcher from '../dispatcher';

class AddUserStore extends EventEmitter {
    constructor() {
        super();
        this.id = '';
        this.addUserToServer = this.addUserToServer.bind(this);
        this.getUserId = this.getUserId.bind(this);
        this.setId = this.setId.bind(this);
    }

    addUserToServer(user) {
        addUser(user).then(response => this.setId(response));
    }

    setId(user) {
        let {id} = user;
        this.id = id;
        this.emit('change');
    }

    getUserId() {
        return this.id;
    }

    handleAction(action) {
        switch (action.type) {
            case 'ADD_USER':
                this.addUserToServer(action.payload);
                break;
            default:
                // eslint-disable-next-line no-unused-expressions
                () => {};
        }
    }
}

const addUserStore = new AddUserStore();

dispatcher.register(addUserStore.handleAction.bind(addUserStore));

export default addUserStore;