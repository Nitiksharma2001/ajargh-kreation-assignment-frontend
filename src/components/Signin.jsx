import React, { useState } from 'react'

const Signup = ({setUser}) => {
  const [email, setEmail] = useState('nitik@nitik.com')
  const [password, setPassword] = useState('nitik')
  const handleClick = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password})
    };
    fetch('http://localhost:4000/signin', options)
      .then(response => response.json())
      .then(data => {
        console.log({...data.user, token: data.token});
        setUser({...data.user, token: data.token})
      })
      .catch(error => console.error(error));
  }
  return <div>
    <h1>Signin</h1>
    <div> email: <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /></div>
    <div> password: <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} /></div>
    <button onClick={handleClick}>Submit</button>
  </div>
}

export default Signup
