# Test Assignment: Posts Application

## Description

This project is a simple application that displays a list of posts fetched from an API and allows users to mark posts as favorite. The application includes the following features:

1. **Posts Page**:
    - Fetches and displays real data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
    - User can add and remove posts from favorites. Favorite status updates everywhere in the app.
    - Clicking on a post redirects to the post page.
    - Each post displays a user avatar with the first letters of the user's first and last names, and the avatar color is random for each user.

2. **Post Page**:
    - Fetches and displays real data for a specific post from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts/:id).
    - The post pages are generated on the server side.
    - Allows adding and removing the post from favorites from this page as well.
    - Displays comments for the post fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts/:id/comments).

3. **Technical Requirements**:
    - Built with React and Next.js.
    - Uses Redux for state management.
    - Written in TypeScript.
    - Enforces code quality with ESLint.
    - Styled with Tailwind CSS.

## Installation

Follow these steps to set up and run the project:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/posts-app.git
    cd posts-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the development server**:
    ```sh
    npm run dev
    ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## Project Structure

The project has the following structure:
```sh
my-blog/
├── components/
│   ├── Avatar.tsx
│   ├── Breadcrumb.tsx
│   ├── HeartIcon.tsx
│   ├── Post.tsx
├── features/
│   └── posts/
│       ├── postsSlice.ts
│       ├── types.ts
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   └── posts/
│       └── [id].tsx
├── public/
├── styles/
│   └── globals.css
├── .eslintrc.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Components

- **Avatar**: Displays a user's avatar with initials and a random background color.
- **Breadcrumb**: Shows the navigation path for the current page.
- **HeartIcon**: Displays a heart icon to mark/unmark a post as favorite.
- **Post**: Displays an individual post with its title, body, avatar, and favorite icon.

## Pages

- **index.tsx**: The main page that displays the list of posts.
- **[id].tsx**: The post page that displays the details of a specific post and its comments.

## Redux

- **postsSlice.ts**: Contains the Redux slice for managing posts and favorite status.
- **types.ts**: Defines the TypeScript types for Post and Comment.

## Styles

- **globals.css**: Contains global styles and Tailwind CSS configuration.

## ESLint Configuration

The project uses ESLint for code quality and consistency. The ESLint configuration is as follows:

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'tailwindcss',
    ],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
```
## Tailwind CSS Configuration

The Tailwind CSS configuration is defined in globals.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 12, 10, 9;
  --background-start-rgb: 255, 255, 255;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 245, 245, 245;
    --background-start-rgb: 23, 23, 23;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

@layer utilities {
  .text-balance {
      overflow-wrap: break-word;
  }
}
```