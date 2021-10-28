import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });

    const handleClick = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div>
                <h2>{user.name}</h2>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <h2>Встречался {user.completedMeetings} раз</h2>
                <h2>Рейтинг: {user.rate}/5</h2>
                <button onClick={handleClick}>Все пользователи</button>
            </div>
        );
    } else {
        return <h2>Loading...</h2>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
