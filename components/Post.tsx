import React from 'react';
import { Post as PostType } from '../features/posts/types';
import Avatar from './Avatar';
import Link from 'next/link';
import HeartIcon from './HeartIcon';

// Interface for the Post component props
interface PostProps {
    post: PostType; // The post data
    isFavorite: boolean;    // Indicates if the post is marked as favorite
    toggleFavorite: (id: number) => void;   // Function to toggle the favorite status
    avatarColor: string;    // The background color for the avatar
}

// Function to capitalize the first letter of each sentence in a text
const capitalizeSentences = (text: string) => {
    return text.replace(/(?:^|\. )\S/g, (char) => char.toUpperCase());
};

// Post component to display an individual post with an avatar, title, body, and a favorite icon
const Post: React.FC<PostProps> = ({ post, isFavorite, toggleFavorite, avatarColor }) => (
    <div className="border p-4 rounded-2xl mb-4">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
                {/* Avatar component to display the user's avatar */}
                <Avatar firstName="User" lastName={`${post.id}`} color={avatarColor} />
                <h2 className="ml-4 text-xl">
                    {/* Link to navigate to the detailed post page */}
                    <Link href={`/posts/${post.id}`} legacyBehavior>
                        <a>{capitalizeSentences(post.title)}</a>
                    </Link>
                </h2>
            </div>
            {/* HeartIcon component to display the favorite icon */}
            <HeartIcon isFavorite={isFavorite} toggleFavorite={() => toggleFavorite(post.id)} />
        </div>
        {/* Display the body of the post with capitalized sentences */}
        <p>{capitalizeSentences(post.body)}</p>
    </div>
);

export default Post;    // Export the Post component as the default export