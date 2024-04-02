import {useState} from "react";
import "./style.css"

const generateId = () => Math.floor(Math.random() * 100)

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos(todos => todos.concat({text: input, id: generateId()}));
        setInput("");
    }

    const removeTodo = (id) => setTodos((todos) => todos.filter((e) => e.id !== id));

    return <>
    <div className="container">
        <h1>Shady's Todo App 📘</h1>
        <fieldset>
            <p>Kindly input the task you want to accomplish</p>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="New Todo" 
            />
            <button onClick={handleSubmit}>Add</button>
            <ul className="todos-list">
                {todos.map(({text, id}) => (
                    <li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)} >
                            X 
                        </button>
                    </li>
                ))}
            </ul>
        </fieldset>        
    </div>
    </>
}

export default Todo;
