import React from "react";

const Box = ({id, backgroundColor, width, height, handleRemove}) => {
    const remove = () => handleRemove(id);
    return (
        <div className="Box">
            <div style={{
                backgroundColor,
                width: `${width}em`,
                height: `${height}em`
            }}>

            </div>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;