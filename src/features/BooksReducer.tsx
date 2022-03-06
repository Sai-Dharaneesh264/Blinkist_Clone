import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { StateProps } from '../components/assets/Types'

export const getBooks = createAsyncThunk('books/getBooks',
    async (data: string) => {
        console.log('entered');
        const response =  await axios.get(`http://localhost:3004/${data}`)
        return response.data
    }
)
interface Props {
    status: string;
    books: StateProps[]
}

const initialState: Props = {
    status: '',
    books: [{id: '1'}]
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

export default booksSlice.reducer;