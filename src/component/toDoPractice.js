import  { useRef, useState } from "react";


function TodoPractice() {
    const inputref = useRef('')
    const [todos, updateTodos] = useState([])



    function renderItem(item){
        const{text, id, status} = item
        return(
            <li key={id}>
                <span>{text}</span>
                <span>{status}</span>
            </li>
        )
    }



    function addToDo() {
        const todo = { text: inputref.current.value, id: Date.now(), status: 'pending' }
        const newTodos = JSON.parse(JSON.stringify(todos));
        newTodos.push(todo)
        //updatedValue('');
        updateTodos(newTodos)
        inputref.current.value='';

    }

    return (

        <div>
            <div>
                <input type="text" ref={inputref} />
                <input type="button" value="Add" onClick={addToDo} />
            </div>

        <ul>
            {
            todos.map(renderItem)
            }
        </ul>

        </div>
    )
}

export default TodoPractice;