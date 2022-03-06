import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/BooksReducer'
import bookReducer from '../features/BookReducer'

export const store = configureStore({
    reducer: {
        books: booksReducer,
        book: bookReducer
    }
})


export type RootState = ReturnType<typeof store.getState>