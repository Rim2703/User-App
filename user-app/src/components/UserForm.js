import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, selectedUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nameError, setNameError] = useState(null)
  const [mobileError, setMobileError] = useState(null)
  const [emailError, setEmailError] = useState(null)

  useEffect(() => {
    if (selectedUser) {
      // Populate the form fields with selectedUser data
      setName(selectedUser.name)
      setEmail(selectedUser.email)
      setPhone(selectedUser.phone)
    }
  }, [selectedUser])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate inputs
    let nameErr = '';
    let mobileErr = '';
    let emailErr = '';

    if (name.trim() === '') {
      nameErr = 'Please enter your name';
    }

    if (phone.trim() === '') {
      mobileErr = 'Please enter your mobile number';
    } else if (!/^\d{10}$/.test(phone)) {
      mobileErr = 'Please enter a valid mobile number';
    }

    if (email.trim() === '') {
      emailErr = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailErr = 'Please enter a valid email';
    }

    setNameError(nameErr)
    setEmailError(emailErr)
    setMobileError(mobileErr)

    if (!nameErr && !emailErr && !mobileErr) {
      const newUser = { name, email, phone }
      if (selectedUser) {
        // update a selectedUser data
        console.log('Updated user:', selectedUser.id, newUser)
        updateUser(selectedUser.id, newUser)
      } else {
        // add newUser data
        console.log('New user:', newUser)
        addUser(newUser)
      }
      setName('')
      setEmail('')
      setPhone('')
    }
  }

  return (
    <div className="TodoWrapper">
      <h1>User Management Application</h1>
      <form onSubmit={handleSubmit} className="TodoForm">
        <label>
          Name:
          <input
            className="todo-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {nameError && <div className="error">{nameError}</div>}

        <label>
          Email:
          <input
            className="todo-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {emailError && <div className="error">{emailError}</div>}

        <label>
          Phone:
          <input
            className="todo-input"
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        {mobileError && <div className="error">{mobileError}</div>}

        <button className="todo-btn" type="submit">
          {selectedUser ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>
  )
}

export default UserForm;

