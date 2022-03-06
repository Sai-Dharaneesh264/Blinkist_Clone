
import {store} from '../../store/store'
import { getBook, getOneBook } from '../BookReducer'
const appState = store.getState();

test('test loading', async () => {
    const data = [{'id': "1"}]
    const mockThunk = await (await store.dispatch(getBook({id: '1', status: 'reading'}))).meta.requestStatus


    expect(mockThunk).toEqual('fulfilled');
})

test('test getBook rejectedloading', async () => {
    const data = [{'id': "1"}]
    const mockThunk = await (await store.dispatch(getBook({id: '0', status: 'reading'}))).meta.requestStatus


    expect(mockThunk).toEqual('rejected');
})

test('test getOneBook loading', async () => {
    const data = [{'id': "1"}]
    const mockThunk = await (await store.dispatch(getOneBook('1'))).meta.requestStatus


    expect(mockThunk).toEqual('fulfilled');
})

test('test getOneBook rejected loading', async () => {
    const data = [{'id': "1"}]
    const mockThunk = await (await store.dispatch(getOneBook('0'))).meta.requestStatus


    expect(mockThunk).toEqual('rejected');
})