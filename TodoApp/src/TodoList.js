import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        let newTodo = {...todo, id:uuid()};
        setTodos(todos => [...todos, newTodo]);
    };

    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !==id));
    }

    const renderTodos = () => {
        return (
            <div>
                <ul>
                    {todos.map(({id, todoText}) => 
                        <li key={id}>
                            <Todo 
                            id={id}
                            todoText={todoText}
                            handleRemove={removeTodo}
                            />
                        </li>
                    )}
                </ul>
            </div>
        );
    };

    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo} />
            {renderTodos()}
        </div>
    );
};

export default TodoList;