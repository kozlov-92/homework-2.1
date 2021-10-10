import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "../api";
function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        const newUsers = [];
        users.forEach((value) => {
            if (value._id !== userId) {
                newUsers.push(value);
            }
        });
        setUsers(newUsers);
    };
    const deleteTable = () => {
        if (users.length === 0) {
            return "none";
        } else {
            return "table";
        }
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

    return (
        <div>
            <main>
                <SearchStatus length={users.length} />
                <Users
                    onDelete={handleDelete}
                    onDeleteTable={deleteTable}
                    onToggleBookMark={handleToggleBookMark}
                    users={users}
                />
            </main>
        </div>
    );
}

export default App;
