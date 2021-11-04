import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getUserData } from "../../api/dummyApi";
import { BackButton } from "../../components/BackButton/BackButton";
import { ThemeChanger } from "../../components/ThemeChanger/ThemeChanger";
import { UserData } from "../../components/UserData/UserData";
import './UserPage.css';

const UserPage = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getUserData(params.id, response => setUser(response));
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

export default UserPage;
