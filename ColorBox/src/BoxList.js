import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        let newBox = {...box, id:uuid()};
        setBoxes(boxes => [...boxes, newBox]);
    };

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !==id));
    }

    const renderBoxes = () => {
        return (
            <div>
                {boxes.map(({id, backgroundColor, width, height}) => 
                    <Box 
                        id={id} 
                        key={id}
                        backgroundColor={backgroundColor}
                        width={width}
                        height={height}
                        handleRemove={removeBox}
                    />
                )}
            </div>
        );
    };

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
};

export default BoxList;