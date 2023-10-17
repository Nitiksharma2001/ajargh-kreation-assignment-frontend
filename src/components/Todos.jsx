import React, { useEffect, useState } from 'react'

const Signup = ({ user, setUser, todos, setTodos, setTodoid, setCheck }) => {
  useEffect(() => {
    if (user) {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'bearer ' + user.token,
        },
      }
      fetch('http://localhost:4000/user/todos', options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodos(data)
        })
        .catch((error) => console.error(error))
    }
  }, [user])
  const handleClick = (todoid) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + user.token,
      },
      body: JSON.stringify({todoid})
    }
    fetch('http://localhost:4000/user/deletetodo', options)
      .then((response) => response.json())
      .then((data) => {
        setUser(prev => {
          return {...prev, todos: data.user.posts}
        })
        console.log(data);
      })
      .catch((error) => console.error(error))
  }
  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo._id}>
              <div>{todo.title}</div>
              <div>{todo.description}</div>
              <input type="checkbox" checked={todo.isDone} />
              <button onClick={() => handleClick(todo._id)}>Delete</button>
              <button onClick={() => {
                setCheck(false)
                setTodoid(todo._id)
              }}>updatetodo</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Signup