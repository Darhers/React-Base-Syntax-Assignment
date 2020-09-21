import React from 'react';
import "./UserOutput.css"

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p className="header">
                Hello!
            </p>
            <p className="userName">
                My name is {props.name}
            </p>
        </div>
    );
}

export default UserOutput;