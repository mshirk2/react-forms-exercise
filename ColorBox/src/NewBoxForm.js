import React, { useState } from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        backgroundColor: '',
        width: '',
        height: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Color</label>
            <input
                id="backgroundColor"
                type="color"
                name="backgroundColor"
                placeholder="Color"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="number"
                name="width"
                placeholder="Width"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="number"
                name="height"
                placeholder="Height"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Make Box</button>
        </form>
    )
}

export default NewBoxForm;