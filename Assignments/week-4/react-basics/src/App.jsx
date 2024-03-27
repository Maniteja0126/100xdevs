
import { useState } from 'react'
import './App.css'
import TodoModel from './components/TodoModel';

function App() {
  const [todo, setTodo] = useState([]);
  const [showModel, setShowModel] = useState(false)



  return (
    <div>
      <div>
        <h1>TODO</h1>
        <button className="btn" onClick={() => setShowModel(!showModel)}>Add Task</button>
        {
          todo.map((item) => {
            return <div key={item.id}
              style={{
                width: "320px",
                textAlign: "start",
                backgroundColor: "#1a1a1a",
                padding: "16px",
                borderRadius: "8px",
                margin: "8px",
              }}
            >
              <h2>Title : {item.title}</h2>
              <p>Description : {item.description}</p>
            </div>
          })
        }

        {
          showModel && (
            <TodoModel
              todo={todo}
              setTodo={setTodo}
              showModel={setShowModel}
            />
          )
        }

      </div>
    </div>
  )
}

export default App
