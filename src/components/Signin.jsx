import React, { useState } from 'react'

const Signup = ({setUser}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password})
    };
    fetch('https://ajargh-kreaction-assignment.onrender.com/signin', options)
      .then(response => response.json())
      .then(data => {
        setUser({...data.user, token: data.token})
      })
      .catch(error => console.error(error));
  }
  return <div style={{border:'2px solid red'}}>
    <h1>Signin</h1>
    <div><b> email:</b> <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /></div>
    <div> <b> password:</b> <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} /></div>
    <button onClick={handleClick}>Submit</button>
  </div>
}

export default Signup
