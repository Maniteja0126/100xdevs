/* eslint-disable react/prop-types */
import { useState } from 'react'

const TodoModel = ({ todo, setTodo, showModel }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const addTodo = () => {
        setTodo([...todo, { title, description }])
        showModel(false)
    }
    return (
        <>
      <div className="modal-backdrop">
        <div className="modal-content">
          <h2>Add Todo</h2>
          <input
            className="custom-input"
            id="title"
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="custom-input"
            id="description"
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn" onClick={addTodo}>
            +
          </button>
          <button
            className="btn close-modal-btn"
            onClick={() => showModel(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
    )
}

export default TodoModel