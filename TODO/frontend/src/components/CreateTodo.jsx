import { useState , useEffect} from "react"

const CreateTodo = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [todoAdded, setTodoAdded] = useState(false);

    useEffect(() => {
        if (todoAdded) {
            alert("Todo added");
        }
    }, [todoAdded]);

    const handleClick = async () => {
        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                setTodoAdded(true);
            } else {
                throw new Error('Failed to add todo');
            }
        } catch (err) {
            alert(err.message);
        }
    };
    return (
        <div>
            <input type="text" placeholder='title'
                onChange={(e) => setTitle(e.target.value)}
            /> <br />
            <input type="text" placeholder='description'
                onChange={(e) => setDescription(e.target.value)}
            /><br />
            <button onClick={handleClick}>Add a Todo</button>
        </div>
    )
}

export default CreateTodo