import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

// Interface for the HeartIcon component props
interface HeartIconProps {
    isFavorite: boolean; // Indicates whether the item is marked as a favorite
    toggleFavorite: () => void; // Function to toggle the favorite status
}

// HeartIcon component to display a heart icon that toggles between filled and outlined states
const HeartIcon: React.FC<HeartIconProps> = ({ isFavorite, toggleFavorite }) => (
    <button onClick={toggleFavorite} className="focus:outline-none">
        <FontAwesomeIcon
            // Display filled heart icon if isFavorite is true, otherwise display outlined heart icon
            icon={isFavorite ? faHeart : faHeartOutline}
            // Apply different colors and styles based on the favorite status
            className={`text-2xl ${isFavorite ? 'text-red-600' : 'text-neutral-950 dark:text-neutral-100'} transition duration-200 ease-in-out`}
        />
    </button>
);

export default HeartIcon;   // Export the HeartIcon component as the default export
