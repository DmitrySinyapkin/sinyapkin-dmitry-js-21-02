import React from "react";
import ComponentWithHelper from "../../wrappers/ComponentWithHelper";
import { getUserList } from "../../api/dummyApi";
import { PageButton } from "../PageButton/PageButton";
import { User } from "../User/User";
import './UserList.css';
import { ThemeContextConsumer } from "../../contexts/ThemeContext";

const initialState = {
    users: [],
    currentPage: 0,
}

const pageNumbers = [0, 1, 2, 3, 4];

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.loadUsers = this.loadUsers.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    loadUsers(page, limit) {
        getUserList(page, limit, response => this.setState({users: response.data}));
    }

    componentDidMount() {
        this.loadUsers(0, 10);
    }

    changePage(page) {
        this.setState({currentPage: page});
        this.loadUsers(page, 10);
    }

    render() {
        return (
            <div className="userlist">
                <div className="userlist__container">
                    {this.state.users.map((item, index) =>
                        <ComponentWithHelper text={item.id} key={index}>
                            <User 
                                title={item.title}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                picture={item.picture}
                            />
                        </ComponentWithHelper>
                    )}
                </div>
                <div className="pages__container">
                    <div className="pages__changer">
                        {pageNumbers.map((item) =>
                            <PageButton
                                number={item + 1}
                                activeNumber={this.state.currentPage + 1}
                                onClick={() => this.changePage(item)}
                                key={item}
                            />
                        )}
                    </div>
                    <ThemeContextConsumer>
                        {
                            (context) => (
                                <label className={context.darkTheme && "label_dark"}>Темная тема  <input className="theme-changer" type="checkbox" checked={context.darkTheme} onClick={context.toggleTheme}/></label> 
                            )  
                        }
                    </ThemeContextConsumer>
                </div>
            </div>
        );
    }
}
