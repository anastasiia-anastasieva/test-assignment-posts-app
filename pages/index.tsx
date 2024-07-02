import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleFavorite } from '../features/posts/postsSlice';
import axios from 'axios';
import Post from '../components/Post';
import Breadcrumb from '../components/Breadcrumb';

// Interface for a Post object
interface Post {
    id: number;     // Unique ID of the post
    title: string;  // Title of the post
    body: string;   // Body content of the post
    userId: number; // ID of the user who created the post
}

// Interface for the props of PostsPage component
interface PostsPageProps {
    posts: Post[];  // Array of posts to be displayed
}

// Function to check if a color is close to a target color within a certain threshold
const isColorCloseTo = (color: string, target: string, threshold: number) => {
    const colorRgb = parseInt(color.slice(1), 16);
    const targetRgb = parseInt(target.slice(1), 16);

    const r1 = (colorRgb >> 16) & 0xff;
    const g1 = (colorRgb >> 8) & 0xff;
    const b1 = colorRgb & 0xff;

    const r2 = (targetRgb >> 16) & 0xff;
    const g2 = (targetRgb >> 8) & 0xff;
    const b2 = targetRgb & 0xff;

    const distance = Math.sqrt(
        (r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2
    );

    return distance < threshold;
};

// Function to generate a random avatar color that is not close to black or white
const generateAvatarColor = () => {
    let color = '';
    while (true) {
        color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        if (
            !isColorCloseTo(color, '#000000', 50) && // black
            !isColorCloseTo(color, '#ffffff', 50) && // white
            color.length === 7
        ) {
            break;
        }
    }
    return color;
};

// PostsPage component to display a list of posts with avatars and favorite icons
const PostsPage = ({ posts }: PostsPageProps) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.posts.favorites);
    const [avatarColors, setAvatarColors] = useState<Record<number, string>>({});

    // Function to generate and store avatar colors for each post
    const generateAndStoreColors = (posts: Post[]) => {
        const newColors = posts.reduce((acc, post) => {
            acc[post.id] = generateAvatarColor();
            return acc;
        }, {} as Record<number, string>);
        setAvatarColors(newColors);
        localStorage.setItem('avatarColors', JSON.stringify(newColors));
    };

    // useEffect hook to load avatar colors from local storage or generate new ones
    useEffect(() => {
        const storedColors = localStorage.getItem('avatarColors');
        if (storedColors) {
            setAvatarColors(JSON.parse(storedColors));
        } else {
            generateAndStoreColors(posts);
        }
    }, [posts]);

    // Function to reset avatar colors
    const resetColors = () => {
        generateAndStoreColors(posts);
    };

    return (
        <div className="container mx-auto p-4">
            <Breadcrumb />  {/* Breadcrumb navigation */}
            <h1 className="text-2xl mb-4">Posts</h1>
            <ul>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        isFavorite={favorites.includes(post.id)}
                        toggleFavorite={() => dispatch(toggleFavorite(post.id))}
                        avatarColor={avatarColors[post.id]}
                    />
                ))}
            </ul>
            <button
                onClick={resetColors}
                className="mt-4 p-2 bg-red-500 text-white rounded"
            >
                Reset Avatar Colors
            </button>
        </div>
    );
};

// Function to fetch posts data during build time
export const getStaticProps: GetStaticProps = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
        props: {
            posts: response.data,
        },
    };
};

export default PostsPage;   // Export the PostsPage component as the default export
