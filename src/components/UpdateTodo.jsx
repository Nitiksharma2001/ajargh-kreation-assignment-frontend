import React, { useState } from 'react'
const Signup = ({ user, setTodos, setCheck, todoid }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isDone, setIsDone] = useState(false)
  const handleClick = () => {
    if(!title || !description){
      return ;
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer '+user.token,
      },
      body: JSON.stringify({todoid, title, description, isDone})
    }
    fetch('http://localhost:4000/user/updatetodo', options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTodos(prev => prev.map(todo => {
          if(todo._id === todoid){
            return data.todo
          }
          else{
            return todo
          }
        }))
        setCheck(prev => !prev)
      })
      .catch(error => console.error(error));
  }
  return <div>
    <h1>Add a Todo</h1>
    <div> <b>title:</b> <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} /></div>
    <div> <b>description:</b> <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} /></div>
    <div> <b>isDone:</b><input type="checkbox" checked={isDone} onChange={(e) => setIsDone(e.target.checked)} /> </div>
    <button onClick={handleClick}>Submit</button>
  </div>
}

export default Signup
