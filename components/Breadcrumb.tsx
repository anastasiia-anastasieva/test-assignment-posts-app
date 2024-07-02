import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

// Breadcrumb component for displaying navigation links
const Breadcrumb: React.FC = () => {
    const router = useRouter(); // Get the current router instance
    const pathParts = router.asPath.split('/').filter((part) => part);  // Split the path into parts and filter out empty parts

    return (
        <nav className="text-sm text-neutral-500 mb-4">
            <Link href="/" className="hover:underline">
                Posts
            </Link>
            {pathParts.length > 1 && (
                <span>
          {' / '}
                    <span>{pathParts[1]}</span>
        </span>
            )}
        </nav>
    );
};

export default Breadcrumb;  // Export the Breadcrumb component as the default export
