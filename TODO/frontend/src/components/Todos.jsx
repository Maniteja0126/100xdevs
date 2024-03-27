/* eslint-disable react/prop-types */



const Todos = ({ todos }) => {
    return (
        <div>
            {
                todos.map((todo, idx) => {
                    return <div key={idx}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button >{todo.completed == true ? "completed" : "Mark as Completed"}</button>
                    </div>
                })
            }
        </div>
    )
}

export default Todos