import React from 'react';

const HelloWorld = ({name}) => {
    const sayHi = (event) => {
        alert(`Hi ${name}`);
    }

    return(
        <div>
            <a
                href="#"
                onClick={sayHi}> Say hi</a>
        </div>
    );
};

HelloWorld.protoTypes = {
    name: React.PropTypes.string.isRequired
};

export default HelloWorld;