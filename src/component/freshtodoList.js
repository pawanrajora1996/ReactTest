import { useRef, useState } from "react";
import "./freshTodo.css";




function FreshTodoList() {
    const inputref = useRef("")
    const [todos, updatetodos] = useState([]);



    function renderItem(item) {
        const { text, id, status, } = item;

        return (
            <div>
                <li key={id}>
                    <span>{text}</span>
                    <span>{status}</span>
                </li>
            </div>

        )
    }


    function AddTodo() {
        const todo = { text: inputref.current.value, id: Date.now(), status: "pending" }
        const newTodos = JSON.parse(JSON.stringify(todos));
        newTodos.push(todo);
        updatetodos(newTodos);
        inputref.current.value = "";
    }

    return (

        <>
        <div className="main">
            <input className="input-design" type="text"  ref={inputref} />
            <button className="button-design" onClick={AddTodo}>Add</button>

            </div>

        <div className="design-ul">
        <ul>
        { todos.map(renderItem) }
        </ul>
        </div>

        </>





    );




};
export default FreshTodoList;