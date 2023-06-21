import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  const addUser = (newUser) => {
    const newUserId = Date.now().toString();
    const createUser = { id: newUserId, ...newUser }
    setUsers([...users, createUser])
  }

  const updateUser = (userId, updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user))
    )
    setSelectedUser(null)
  }

  const handleEdit = (user) => {
    setSelectedUser(user)
  }

  const handleDelete = (user) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id))
  }

  return (
    <div className="App">
      <UserForm addUser={addUser} updateUser={updateUser} selectedUser={selectedUser} />
      {users.length > 0 ? (
        <UsersList users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
      ) : (
        <p>No users to display.</p>
      )}
    </div>
  )
}

export default App;

