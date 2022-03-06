
import {store} from '../../store/store'
import { getBooks } from '../BooksReducer'
const appState = store.getState();

test('test loading', async () => {
    const data = [{'id': "1"}]
    const mockThunk = await (await store.dispatch(getBooks('books'))).meta.requestStatus


    expect(mockThunk).toEqual('fulfilled');
})

test('test rejected loading', async () => {
    const data = [{'id': "1"}]
    const mockThunk = await (await store.dispatch(getBooks('boo'))).meta.requestStatus


    expect(mockThunk).toEqual('rejected');
})