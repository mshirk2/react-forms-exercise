import React, { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todoText: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoText">To-do</label>
            <input
                id="todoText"
                type="text"
                name="todoText"
                value={formData.todoText}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;