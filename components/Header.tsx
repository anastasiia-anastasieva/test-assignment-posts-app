import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartOutline} from '@fortawesome/free-regular-svg-icons';

// Interface for HeartIcon component props
interface HeartIconProps {
    isFavorite: boolean;    // Indicates if the item is marked as favorite
    toggleFavorite: () => void; // Function to toggle the favorite status
}

// HeartIcon component to display a heart icon that toggles between filled and outlined states
const HeartIcon: React.FC<HeartIconProps> = ({isFavorite, toggleFavorite}) => (
    <button onClick={toggleFavorite} className="focus:outline-none">
        <FontAwesomeIcon
            icon={isFavorite ? faHeart : faHeartOutline}    // Use filled heart icon if favorite, otherwise use outlined heart icon
            className={`text-2xl ${isFavorite ? 'text-red-600' : 'text-gray-400'} transition duration-200 ease-in-out`} // Apply appropriate styles based on favorite status
        />
    </button>
);

export default HeartIcon;   // Export the HeartIcon component as the default export
