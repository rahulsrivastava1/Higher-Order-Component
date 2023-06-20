import React from 'react';
import HOC from './HOC';

function LikeCounts({ countNumber, handleCount }) {
    return (
        <div>
            <h3>Total Likes : {countNumber}</h3>
            <button onClick={handleCount}>Add Likes</button>
        </div>
    )
}

const EnhancedLikeCounts = HOC(LikeCounts, 5);

export default EnhancedLikeCounts;