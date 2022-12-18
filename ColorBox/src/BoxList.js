import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const renderBoxes = () => {
        return (
            <div>
                {boxes.map(({id, backgroundColor, width, height}) => 
                    <Box 
                        id={id} 
                        backgroundColor={backgroundColor}
                        width={width}
                        height={height}
                    />
                )}
            </div>
        );
    };

    const addBox = box => {
        let newBox = {...box, id:uuid()};
        setBoxes(boxes => [...boxes, newBox]);
    };

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
};

export default BoxList;