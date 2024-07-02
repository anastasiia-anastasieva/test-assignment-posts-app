import { AppProps } from 'next/app';    // Importing the type for the App's props from Next.js
import { Provider } from 'react-redux'; // Importing the Provider component from react-redux to connect React with Redux
import store from '../store';   // Importing the Redux store
import '../styles/globals.css'; // Importing global CSS styles

// Custom App component for Next.js
function MyApp({ Component, pageProps }: AppProps) {
    return (
        // Wrapping the entire app with the Redux Provider to make the Redux store available throughout the app
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp; // Exporting the custom App component as the default export
