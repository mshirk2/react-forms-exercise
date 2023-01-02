import React from "react";

const Todo = ({id, todoText, handleRemove}) => {
    const remove = () => handleRemove(id);
    return (
        <div className="Todo">
            {todoText}
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;