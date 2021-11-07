import React, { useState } from "react";

const Todo = () => {

    const [ searchValue, setSearchValue ] = useState("");
    const [ todos, setToDos] = useState([]);

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    const onHandleAdd = () => {
        setToDos([...todos, searchValue])
        setSearchValue("");
    }

    const onHandleDelete = () => {
        // delete
    }

    const onHandleEdit = () => {
        // edit
    }

    return (
        <div>
            <h3>To Do List</h3>
            <input value={searchValue} onChange={onChange}/>
            <button onClick={onHandleAdd}>Add</button>
            {
                todos.map(todo => <li>{todo}</li>)
            }
        </div>
    )
}

export default Todo;
