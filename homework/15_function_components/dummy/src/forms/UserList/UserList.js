import React, { useEffect, useState } from "react";
import ComponentWithHelper from "../../wrappers/ComponentWithHelper";
import { PageButton } from "../../components/PageButton/PageButton";
import { User } from "../../components/User/User";
import './UserList.css';
import { ThemeChanger } from "../../components/ThemeChanger/ThemeChanger";
import { Link } from "react-router-dom";
import { loadUserListAction } from "../../actions/userList";
import userListStore from "../../stores/userList";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const pageNumbers = [0, 1, 2, 3, 4];

    const loadUsers = (page, limit) => {
        loadUserListAction(page, limit);
        setUsers(userListStore.getUserList());
    } 

    useEffect(() => {
        loadUsers(0, 10);
    }, []); 

    const changePage = (page) => {
        setCurrentPage(page);
        loadUsers(page, 10);
    }

    return (
        <div className="userlist">
            <div className="userlist__container">
                {users.map((item, index) =>
                    <ComponentWithHelper text={item.id} key={index}>
                        <Link to={`${item.id}`}>
                            <User 
                                title={item.title}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                picture={item.picture}
                            />
                        </Link>
                    </ComponentWithHelper>
                )}
                </div>
            <div className="pages__container">
                <div className="pages__changer">
                    {pageNumbers.map((item) =>
                        <PageButton
                            number={item + 1}
                            activeNumber={currentPage + 1}
                            onClick={() => changePage(item)}
                            key={item}
                        />
                    )}
                </div>
                <ThemeChanger/>
            </div>
        </div>
        );
    };
