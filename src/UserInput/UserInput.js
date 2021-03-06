import React from 'react';
import "./UserInput.css"

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input onChange={props.changed} type="text" value={props.name} />
        </div>
    );
}

export default UserInput;