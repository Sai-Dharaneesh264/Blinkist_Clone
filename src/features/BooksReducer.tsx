import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { StateProps } from '../components/assets/Types'

export const getBooks = createAsyncThunk('books/getBooks',
    async () => {
        console.log('entered');
        const response =  await axios.get('http://localhost:3004/books')
        // .then(res => res.data)
        // .catch(err => console.log('error =', err));
        return response.data
        // console.log('once in a diamond', data);
        // return data;
    }
)
interface Props {
    status: string;
    books: StateProps[]
}

const initialState: Props = {
    status: '',
    books: []
}
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder.addCase(getBooks.pending, (state, action) => {
           state.status = 'loading'
       })
       builder.addCase(getBooks.fulfilled, (state, {payload}) => {
           state.status = 'success'
           console.log('payload =', payload)
           state.books = payload
       })

       builder.addCase(getBooks.rejected, (state, action) => {
           state.status = 'failed'
       })
    }
    

})

// export const { getBooks } = booksSlice.actions;

export default booksSlice.reducer;