import React, { useState } from 'react'

const Signup = ({ user, setTodos }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleClick = () => {
    if(!title || !description || !user){
      return ;
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + user.token,
      },
      body: JSON.stringify({title, description})
    }
    fetch('http://localhost:4000/user/addtodo', options)
      .then(response => response.json())
      .then(data => setTodos(prev => [...prev, data.todo]))
      .catch(error => console.error(error));
  }
  return <div>
    <h1>Add a Todo</h1>
    <div> <b>title:</b> <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} /></div>
    <div><b>description:</b>  <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} /></div>
    <button onClick={handleClick}>Submit</button>
  </div>
}

export default Signup
