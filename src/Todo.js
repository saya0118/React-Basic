import React, { useState } from "react";

const Todo = () => {

    const [ searchValue, setSearchValue ] = useState("");
    const [ todos, setToDos] = useState([]);

    const [ editIndex, setEditIndex] = useState(-1);

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    const onHandleAdd = () => {
        setToDos([...todos, searchValue])
        setSearchValue("");
    }

    // const onHandleDelete = index => {
    //     // delete
    //     const newToDos = [...todos]
    //     newToDos.splice(index,1)
    //     setToDos(newToDos)
    // }

    const onHandleDelete = (index) => setToDos(todos.filter((x,i)=> i !== index));

    const onHandleEdit = (item, index) => {
        // edit
        setEditIndex(index);
        setSearchValue(item);
    }

    const onCompleteEdit = () => {
        let newTodos = [...todos];
    
        newTodos[editIndex] = searchValue;
    
        setToDos(newTodos);
        setEditIndex(-1);
        setSearchValue("");
    }

    return (
        <div>
            <h3>To Do List</h3>
            <input value={searchValue} onChange={onChange}/>
            {editIndex === -1 ?
                <button onClick={onHandleAdd}>Add</button> :
                <button onClick={onCompleteEdit}>OK</button>
            }
            {todos.map((todo, i) => 
                <li>
                    {todo}
                    <button onClick={() => onHandleEdit(todo, i)}>Edit</button>
                    <button onClick={() => onHandleDelete(i)}>Delete</button>
                </li>
            )}
        </div>
    )
}

export default Todo;
