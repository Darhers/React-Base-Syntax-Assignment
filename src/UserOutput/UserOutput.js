import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>
                Hello!
            </p>
            <p>
                My name is {props.name}
            </p>
        </div>
    );
}

export default UserOutput;