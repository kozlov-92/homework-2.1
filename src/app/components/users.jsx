import React from "react";
import User from "./user";

const Users = ({ users, onDeleteTable, ...rest }) => {
  return (
    <React.Fragment>
      <table className="table" style={{ display: onDeleteTable() }}>
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User {...rest} {...user} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Users;
