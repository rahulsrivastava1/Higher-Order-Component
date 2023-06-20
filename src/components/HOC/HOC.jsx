import React, { useState } from 'react';

function HOC(Component, data) {
    const newComponent = () => {
        const [count, setCount] = useState(data);

        const handleCount = () => {
            setCount(count + 1);
        }

        return (
            <Component countNumber={count} handleCount={handleCount} />
        )
    }
    return newComponent;
};

export default HOC;