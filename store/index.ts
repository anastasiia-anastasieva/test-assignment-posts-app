import { configureStore } from '@reduxjs/toolkit' // Importing configureStore function from Redux Toolkit
import { useDispatch } from 'react-redux' // Importing useDispatch hook from react-redux
import postsReducer from '../features/posts/postsSlice' // Importing the posts reducer

// Configuring the Redux store
const store = configureStore({
    reducer: {
        posts: postsReducer,    // Adding the posts reducer to the store
    },
})


// Type for the root state of the Redux store
export type RootState = ReturnType<typeof store.getState>

// Type for the dispatch function of the Redux store
export type AppDispatch = typeof store.dispatch

// Custom hook to use the AppDispatch type
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store    // Exporting the configured store as the default export
