import React from 'react';
import ReactJson from 'react-json-view';
import './JsonTree.css'


const jsonTree = (props) => {
    const { src, theme, onAdd, onEdit, onDelete, displayDataTypes, displayObjectSize} = props
    return(
        <div className='JsonTree'>
            <ReactJson
                src={src}
                theme={theme}
                onAdd={onAdd}
                onDelete={onDelete}
                onEdit={onEdit}
                displayDataTypes={displayDataTypes}
                displayObjectSize={displayObjectSize}
            />
        </div>
    )
}

export default jsonTree;