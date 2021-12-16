import React, { useEffect, useState } from "react";
import ComponentWithHelper from "../../wrappers/ComponentWithHelper";
import { User } from "../../components/User/User";
import './UserList.css';
import { ThemeChanger } from "../../components/ThemeChanger/ThemeChanger";
import { Link } from "react-router-dom";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../actions/userList';

const UserList = ({users, total, loadUserList}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        loadUserList(0, 10);
    }, []); 

    const changePage = (page, limit) => {
        setCurrentPage(page);
        setPageSize(limit)
        loadUserList(page - 1, limit);
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

export default connect(
    (state) => ({
        users: state.users.users,
        total: state.users.total,
    }),
    (dispatch) => bindActionCreators(actions, dispatch),
)(UserList);
