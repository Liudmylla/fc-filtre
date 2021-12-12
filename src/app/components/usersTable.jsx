import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";
const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: { iter: "name", name: "Имя" },
        qualities: { name: "Качества" },
        profession: { iter: "profession.name", name: "Профессия" },
        completedMeeting: { iter: "completedMeeting", name: "Встретился" },
        rate: { iter: "rate", name: "Оценка" },
        bookmark: { iter: "bookmark", name: "Избранное" },
        delete: {}
    };

    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id} />
                ))}
            </tbody>
        </table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object
};
export default UsersTable;
