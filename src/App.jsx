import React, {useState} from "react"
import From from './From'
import Todos from './Todos'


const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:"This is barnd new title1",
      description:"This is brand new description1"
    },
    {
      id:2,
      title:"This is barnd new title2",
      description:"This is brand new description2"
    },
    {
      id:3,
      title:"This is barnd new title3",
      description:"This is brand new description3"
    }
  ])

  const [id, setId] = useState("")

  console.log("this is id =",id);

  const deleteTodo = (id) =>{
    setTodos(todos.filter((d)=>d.id != id))
  }
  return (
    <>
    <div className='container'>
      <h1 className="text-center">React To Do List CRUD App</h1>


      {/* <button onClick={()=>deleteTodo(3)} className="btn btn-danger">Test Delete</button> */}

      <From id={id} setId={setId} todos={todos} setTodos={setTodos} />
      <Todos todos={todos} deleteTodo={deleteTodo} setId={setId}/>
    </div>
    </>
    
  )
}

export default App

