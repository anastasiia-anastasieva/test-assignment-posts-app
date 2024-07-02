// Interface for a Post object
export interface Post {
    userId: number; // ID of the user who created the post
    id: number;     // Unique ID of the post
    title: string;  // Title of the post
    body: string;   // Body content of the post
}

// Interface for a Comment object
export interface Comment {
    postId: number; // ID of the post to which the comment belongs
    id: number;     // Unique ID of the comment
    name: string;   // Name of the comment's author
    email: string;  // Email of the comment's author
    body: string;   // Body content of the comment
}
