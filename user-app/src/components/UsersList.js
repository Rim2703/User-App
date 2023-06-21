import React from 'react';

const UsersList = ({ users, handleEdit, handleDelete }) => {
    return (
        <div className="Card-Wrapper">
            <h3>Users List</h3>
            {users.map((user) => (
                <div key={user.id} className="User-Card">
                    <div className="user-info">
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                    </div>
                    <button className="edit-btn" onClick={() => handleEdit(user)}>
                        Edit
                    </button>
                    <button className="dlt-btn" onClick={() => handleDelete(user)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default UsersList;

