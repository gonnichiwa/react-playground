import React from 'react';

const IterationSample = () => {
    const names = [1,2,3,4,5];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>)
    return (
        <div>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;