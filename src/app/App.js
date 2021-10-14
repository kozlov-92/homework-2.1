import React, { useState, useEffect } from "react";
import Users from "./components/users";

import api from "./api";

function App() {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        const newUsers = [];
        users.forEach((value) => {
            if (value._id !== userId) {
                newUsers.push(value);
            }
        });
        setUsers(newUsers);
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    const deleteTable = () => {
        if (users.length === 0) {
            return "none";
        } else {
            return "table";
        }
    };
    return (
        <div>
            {users && (
                <Users
                    onDelete={handleDelete}
                    onDeleteTable={deleteTable}
                    onToggleBookMark={handleToggleBookMark}
                    users={users}
                />
            )}
        </div>
    );
}

export default App;
