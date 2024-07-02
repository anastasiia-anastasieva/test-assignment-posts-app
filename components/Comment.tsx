import React from 'react';
import {Comment as CommentType} from '../features/posts/types';

// Function to capitalize the first letter of each sentence in a text
const capitalizeSentences = (text: string) => {
    return text.replace(/(?:^|\. )\S/g, (char) => char.toUpperCase());
};

// Comment component to display individual comments
const Comment: React.FC<{ comment: CommentType }> = ({comment}) => (
    <div className="border p-4 rounded mb-2">
        <h4 className="font-bold">{comment.name}</h4>   {/* Display the comment author's name in bold */}
        <p>{capitalizeSentences(comment.body)}</p>   {/* Display the comment body with sentences capitalized */}
    </div>
);

export default Comment; // Export the Comment component as the default export
