import React, { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password})
    };
    fetch('http://localhost:4000/signup', options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  return <div>
    <h1>Signup</h1>
    <div> name: <input type="text" onChange={(e) => setName(e.target.value)} value={name} /></div>
    <div> email: <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /></div>
    <div> password: <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} /></div>
    <button onClick={handleClick}>Submit</button>
  </div>
}

export default Signup
