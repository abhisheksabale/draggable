import React from 'react'
import Draggable from 'react-draggable'
import './DraggableBox.css'

const DraggableBox = ({ index, childComponent }) => {
    const onStart = (e) => {
        e.stopPropagation(); // This is to stop moving parent box if child is moved
    };

    return (
        <Draggable
            onStart={onStart}
            bounds={'parent'} // This makes sure child does not leave parent
            handle='.header' // Box only moves when div with header class is clicked
        >
            <div
                className='draggable-container'
                style={{ width: (200 * (index + 1)), height: (100 * (index + 1)) }}
            >
                <div
                    className='header'
                >
                    Title {index === 0 ? '(child)': `(click count: ${index})`}
                </div>
                <div
                    className='body'
                    style={{ height: ((100 * (index + 1)) - 25) }}
                >
                    {childComponent}
                </div>
            </div>
        </Draggable>
    )
}

export default DraggableBox