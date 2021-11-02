import React, { useEffect, useState } from "react";
import ComponentWithHelper from "../../wrappers/ComponentWithHelper";
import { getUserList } from "../../api/dummyApi";
import { PageButton } from "../PageButton/PageButton";
import { User } from "../User/User";
import './UserList.css';
import { ThemeContextConsumer } from "../../contexts/ThemeContext";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const pageNumbers = [0, 1, 2, 3, 4];

    const loadUsers = (page, limit) => {
        getUserList(page, limit, response => setUsers(response.data));
    }

    useEffect(() => {
        loadUsers(0, 10);
    }); 

    const changePage = (page) => {
        setCurrentPage(page);
        loadUsers(page, 10);
    }

    return (
        <div className="userlist">
            <div className="userlist__container">
                {users.map((item, index) =>
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
                            activeNumber={currentPage + 1}
                            onClick={() => changePage(item)}
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
    };
