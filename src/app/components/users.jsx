import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, onDeleteTable, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const count = users.length;
    const pageSize = 4;
    const handlePageChange = (pageIndex) => {
        console.log("pageIndex", pageIndex);
        setCurrentPage(pageIndex);
    };
    const userCrop = paginate(users, currentPage, pageSize);

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
                    {userCrop.map((user) => (
                        <User {...rest} {...user} key={users._id} />
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </React.Fragment>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDeleteTable: PropTypes.func.isRequired
};

export default Users;
