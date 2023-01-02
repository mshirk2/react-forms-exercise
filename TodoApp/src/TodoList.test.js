import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task='make working app') {

    fireEvent.change(
        todoList.getByLabelText("To-do"), 
        {target: { value: task}}
    );

    const submitButton = todoList.getByText("Add");
    fireEvent.click(submitButton);
}

it("renders without crashing", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("starts with no todos", function () {
    const todoList = render(<TodoList />);

    expect(todoList.queryByText("X")).toBeFalsy();
});

it("adds new todo", function () {
    const todoList = render(<TodoList />);
    addTodo(todoList);
    const removeButton = todoList.getByText("X");

    expect(removeButton).toBeTruthy();
    expect(removeButton.previousSibling).toContain('make working app');
});

it("clears inputs after adding todo", function () {
    const todoList = render(<TodoList />);
    addTodo(todoList);
    const removeButton = todoList.getByText("X");

    expect(removeButton).toBeTruthy();
    expect(todoList.getByLabelText("To-do").value = "");
});

it("removes todo", function () {
    const todoList = render(<TodoList />);
    addTodo(todoList);
    const removeButton = todoList.getByText("X");
    fireEvent.click(removeButton);

    expect(todoList.queryByText("X")).toBeFalsy();
});