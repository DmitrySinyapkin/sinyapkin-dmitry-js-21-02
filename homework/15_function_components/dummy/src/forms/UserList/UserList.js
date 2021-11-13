import React, { useEffect, useState } from "react";
import ComponentWithHelper from "../../wrappers/ComponentWithHelper";
import { User } from "../../components/User/User";
import './UserList.css';
import { ThemeChanger } from "../../components/ThemeChanger/ThemeChanger";
import { Link } from "react-router-dom";
import { loadUserListAction } from "../../actions/userList";
import userListStore from "../../stores/userList";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const setUserListStates = () => {
        setUsers(userListStore.getUserList().data);
        setTotal(userListStore.getUserList().total);
    }

    useEffect(() => {
        userListStore.on('change', () => setUserListStates());
        loadUserListAction(0, pageSize);
    }, []); 

    const changePage = (page, limit) => {
        setCurrentPage(page);
        setPageSize(limit)
        loadUserListAction(page - 1, limit);
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
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={total}
                        onChange={changePage}
                        pageSizeOptions={[10, 20, 30, 50]}
                    />
                </div>
                <ThemeChanger/>
            </div>
        </div>
        );
    };
