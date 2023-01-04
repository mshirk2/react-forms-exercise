import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, backgroundColor = 'rgb(5, 25, 30)', width = '2', height = '3') {

    fireEvent.change(
        boxList.getByLabelText("Color"), 
        {target: { value: backgroundColor}}
    );
    fireEvent.change(
        boxList.getByLabelText("Width"), 
        {target: { value: width}}
    );
    fireEvent.change(
        boxList.getByLabelText("Height"), 
        {target: { value: height}}
    );

    const submitButton = boxList.getByText("Make Box");
    fireEvent.click(submitButton);
}

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("starts with no boxes", function () {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("X")).toBeFalsy();
});

it("adds new box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);
    const removeButton = boxList.getByText("X");

    expect(removeButton).toBeTruthy();
    expect(removeButton.previousSibling).toHaveProperty('style.background', 'rgb(5, 25, 30)');
    expect(removeButton.previousSibling).toHaveProperty('style.width', '2em');
    expect(removeButton.previousSibling).toHaveProperty('style.height', '3em');
});

it("clears inputs after adding box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);
    const removeButton = boxList.getByText("X");

    expect(removeButton).toBeTruthy();
    expect(boxList.getByLabelText("Color").value = "");
    expect(boxList.getByLabelText("Width").value = "");
    expect(boxList.getByLabelText("Height").value = "");
});

it("removes box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);
    const removeButton = boxList.getByText("X");
    fireEvent.click(removeButton);

    expect(boxList.queryByText("X")).toBeFalsy();
});