import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    let newUsers = [];
    users.forEach((value) => {
      // console.log("value._id", value._id);
      // console.log("userId", userId);
      // console.log(value._id === userId);
      // console.log("key", key);

      if (value._id !== userId) {
        newUsers.push(value);
      }
    });

    setUsers(newUsers);

    // console.log(users.length);
    // console.log(users);
  };

  const renderPhrase = () => {
    if (users.length >= 5 || users.length === 1) {
      return `${users.length} человек тусанет сегодня с тобой`;
    } else if (users.length < 5 && users.length > 0) {
      return `${users.length} человека тусанет сегодня с тобой`;
    } else {
      return `Никто с тобой не тусанет!`;
    }
  };

  let getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += users.length === 0 ? "danger" : "primary";

    return classes;
  };

  return (
    <React.Fragment>
      <span className={getBageClasses()}>
        <h3>{renderPhrase()}</h3>
      </span>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((tag) => (
            <tr key={tag._id}>
              <td>{tag.name}</td>
              <td>
                {tag.qualities.map((qual, index) => (
                  <span
                    key={index}
                    className={`badge bg-${qual.color}`}
                    style={{ marginRight: "5px" }}
                  >
                    {qual.name}
                  </span>
                ))}
              </td>
              <td>{tag.profession.name}</td>
              <td>{tag.completedMeetings}</td>
              <td>{`${tag.rate}/5`}</td>
              <td>
                <button
                  onClick={() => handleDelete(tag._id)}
                  className="btn btn-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Users;
