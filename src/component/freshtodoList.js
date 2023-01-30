import { useRef, useState } from "react";
import "./freshTodo.css";




function FreshTodoList() {
    const inputref = useRef("")
    const [todos, updatetodos] = useState([
        
    ]);



    function renderItem(item) {
        const { text, id, status, editing } = item;

        return (
            <div>
                <li key={id}>

                    {editing ? <input defaultValue={text} id={"input-text--" + id} /> : (<span>{text}</span>)}
                    {/* <span>{status}</span> */}
                </li>

                <div>
                    <button className="design-button-all"
                        id={"btn-done--" + id}
                        onClick={handleMarkDone}
                        disabled={status === "done"}>
                        Mark done
                    </button>

                    <button className="design-button-all" id={"edit-btn--" + id} onClick={handleEditButton}
                        disabled={status === "done"}
                    >{editing ? "Edit done" : "Edit"}
                    </button>

                    <button className="design-button-all">Delete</button>

                </div>

            </div>

        )
    }


    function handleMarkDone(event) {
        let id = event.target.id;
        id = id.split("--")[1];
        const index = todos.findIndex((todo) => id === todo.id);
        const todo = { ...todos[index], status: 'done' }
        const newTodos = [...todos];
        newTodos[index] = todo;
        updatetodos(newTodos);
    }




    function handleEditButton(event) {
        let id = event.target.id;
        id = id.split("--")[1];
        const index = todos.findIndex((todo) => id === todo.id);

        const todo = { ...todos[index] };
        if (todo.editing) {
            const inputTodoEle = document.getElementById("input-text--" + id)
            todo.text = inputTodoEle.value;
        }

        todo.editing = !todo.editing;

        const newTodos = [...todos];
        newTodos[index] = todo;
        updatetodos(newTodos);
    }




    function addTodo() {
        const item = { text: inputref.current.value, id: "" + Date.now(), status: "pending", editing: false }
        const newTodos = [...todos];
        newTodos.push(item);
        updatetodos(newTodos);
        inputref.current.value = '';
        

    }

    return (

        <>
            <div className="main">
                <div><h1>Add List For To Do</h1></div>

            <div>
                <input className="input-design" type="text" ref={inputref} />
            <button className="button-design" onClick={addTodo}>Add</button>
                </div>
            </div>

            <div className="design-ul">
                <ul>
                    {todos.map(renderItem)}
                </ul>
            </div>

        </>





    );




};
export default FreshTodoList;