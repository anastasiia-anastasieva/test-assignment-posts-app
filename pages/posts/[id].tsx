import {GetStaticPaths, GetStaticProps} from 'next';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {toggleFavorite} from '../../features/posts/postsSlice';
import Head from 'next/head';
import Breadcrumb from '../../components/Breadcrumb';
import HeartIcon from '../../components/HeartIcon';

// Interface for a Post object
interface Post {
    id: number;     // Unique ID of the post
    title: string;  // Title of the post
    body: string;   // Body content of the post
    userId: number; // ID of the user who created the post
}

// Interface for a Comment object
interface Comment {
    id: number;     // Unique ID of the comment
    name: string;   // Name of the comment's author
    email: string;  // Email of the comment's author
    body: string;   // Body content of the comment
}

// Interface for the props of PostPage component
interface PostPageProps {
    post: Post;             // The post data
    comments: Comment[];    // Array of comments for the post
}

// Function to capitalize the first letter of each sentence in a text
const capitalizeSentences = (text: string) => {
    return text.replace(/(?:^|\. )\S/g, (char) => char.toUpperCase());
};

// PostPage component to display a single post with its comments
const PostPage = ({post, comments}: PostPageProps) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.posts.favorites);

    // Check if the post is marked as favorite
    const isFavorite = favorites.includes(post.id);

    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={capitalizeSentences(post.body)}/>
            </Head>
            <Breadcrumb/>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl">{capitalizeSentences(post.title)}</h1>
                <HeartIcon isFavorite={isFavorite} toggleFavorite={() => dispatch(toggleFavorite(post.id))}/>
            </div>
            <p>{capitalizeSentences(post.body)}</p>

            <div className="mt-8">
                <h2 className="text-xl mb-4">Comments</h2>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id} className=" border p-4 rounded-2xl mb-4">
                            <h3 className="text-lg font-bold">{capitalizeSentences(comment.name)} ({comment.email})</h3>
                            <p>{capitalizeSentences(comment.body)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Function to get the static paths for all posts
export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = response.data;

    // Generate paths for each post
    const paths = posts.map((post) => ({
        params: {id: post.id.toString()},
    }));

    return {paths, fallback: false};    // Return the paths and set fallback to false
};

// Function to fetch post and comments data for a given post ID
export const getStaticProps: GetStaticProps = async (context) => {
    const {id} = context.params!;
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    return {
        props: {
            post: postResponse.data,            // Pass the post data as props
            comments: commentsResponse.data,    // Pass the comments data as props
        },
    };
};

export default PostPage;    // Export the PostPage component as the default export
