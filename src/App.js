import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import UpdateTodo from './components/UpdateTodo'
import { useState } from 'react'
function App() {
  const [user, setUser] = useState(null)
  const [todos, setTodos] = useState([])
  const [check, setCheck] = useState(true)
  const [todoid, setTodoid] = useState(true)

  return (
    <div className='App'>
      {
        check ? 
        <>
        <Signup/>
        <Signin setUser={setUser} />
        <AddTodo user={user} setTodos={setTodos}/>
        <Todos todos={todos}  setTodos={setTodos} setTodoid={setTodoid} setCheck={setCheck} user={user} setUser={setUser}/> </>: <><UpdateTodo user={user} todoid={todoid} setCheck={setCheck}/></> 
      }
      
    </div>
  )
}

export default App
