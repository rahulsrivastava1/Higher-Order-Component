import React from 'react';
import HOC from './HOC';

function CommentCounts({ countNumber, handleCount }) {
    return (
        <div>
            <h3>Total Likes : {countNumber}</h3>
            <button onClick={handleCount}>Add Comments</button>
        </div>
    )
}

const EnhancedCommentCounts = HOC(CommentCounts, 10);

export default EnhancedCommentCounts;