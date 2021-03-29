import './Block.css';
import React from 'react';

const Block = () => {
    return (
        <div className="grid-container">
            <div className="grid-item" id="block1">
                <div>Block 1</div>
            </div>

            <div className="grid-item" id="block2">
                <div>Block 2</div>
            </div>

            <div className="grid-item" id="block3">
                <div>Block 3</div>
            </div>

            <div className="grid-item" id="block4">
                <span>Block 4</span>
            </div>

            <div className="grid-item" id="block5">
                <div>Block 5</div>
            </div>
        </div>
    )
}

export default Block
