import * as React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BookPage from './BookPage'
import { getBookDetail } from '../../apis/Requests'

import { Provider } from 'react-redux'
import { store } from '../../../store/store'
import "@testing-library/jest-dom"

const server = setupServer(
    rest.get('http://localhost:3004/books/1', (req, res, ctx) => {
        return res(
           ctx.status(200),
           ctx.json({ id: '1', data: '123'})
        )
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('checks whether component renders', () => {
    render(<Provider store={store}><BookPage /></Provider>)
    const grid = screen.getByTestId('book_page')
    expect(grid).toBeInTheDocument();
})

test('loads and displays data', async () => {
    render(<Provider store={store}><BookPage /></Provider>)
   const response = await getBookDetail('1')
   expect(response).toEqual({id: '1', data: '12'})
    
})




