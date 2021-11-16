import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { BackButton } from "../../components/BackButton/BackButton";
import { ThemeChanger } from "../../components/ThemeChanger/ThemeChanger";
import { UserData } from "../../components/UserData/UserData";
import './UserPage.css';
import { loadUserDataAction } from "../../actions/user";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getUserData } from "../../api/dummyApi";

const UserPage = ({user, loadUserData}) => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getUserData(params.id).then(response => loadUserData(response));
    }, []);

    const handleBackButton = () => {
        navigate('/');
    } 

    return (
        <div>
            <UserData 
                id={user.id}
                title={user.title}
                firstName={user.firstName}
                lastName={user.lastName}
                gender={user.gender}
                email={user.email}
                dateOfBirth={user.dateOfBirth}
                registerDate={user.registerDate}
                phone={user.phone}
                picture={user.picture}
            />
            <div className="footer">
                <BackButton onClick={handleBackButton}/>
                <ThemeChanger/>
            </div>
        </div>
    );
}

export default connect(
    (state) => ({
        user: state.userData.user,
    }),
    (dispatch) => ({
        loadUserData: bindActionCreators(loadUserDataAction, dispatch)
    })
)(UserPage);

