import React from "react";
import { getUserList } from "../api/dummyApi";
import { PageButton } from "../PageButton/PageButton";
import { User } from "../User/User";
import './UserList.css';

const initialState = {
    users: [],
    total: 0,
}

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.loadUsers = this.loadUsers.bind(this);
    }

    loadUsers(page, limit) {
        getUserList(page, limit, response => this.setState({users: response.data, total: response.total}));
    }

    componentDidMount() {
        this.loadUsers(0, 10);
        console.log(this.state.total);
    }



    render() {
        return (
            <div className="userlist">
                <div className="userlist__container">
                    {this.state.users.map((item, index) =>
                        <User 
                            title={item.title}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            picture={item.picture}
                        />
                    )}
                </div>
                <div className="pages__container">
                    <div className="pages__changer">
                        <PageButton number="1"/>
                        <PageButton number="2"/>
                        <PageButton number="3"/>
                        <PageButton number="4"/>
                        <PageButton number="5"/>
                    </div>
                    <label>Темная тема <input className="theme-changer" type="checkbox"/></label>
                </div>
            </div>
        );
    }
}