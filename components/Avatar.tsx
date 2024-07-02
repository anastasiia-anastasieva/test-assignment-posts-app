import React from 'react';

// Interface for Avatar component props
interface AvatarProps {
    firstName: string;  // The first name of the user
    lastName: string;   // The last name of the user
    color: string;      // The background color for the avatar
}

// Functional component to display user avatar with initials and a background color
const Avatar: React.FC<AvatarProps> = ({ firstName, lastName, color }) => {
    // Get the initials from the first letter of the first and last name
    const initials = `${firstName[0]}${lastName[0]}`;

    return (
        <div
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: color }}
        >
            <span className="text-white">{initials}</span>
        </div>
    );
};

export default Avatar;  // Export the Avatar component as the default export
