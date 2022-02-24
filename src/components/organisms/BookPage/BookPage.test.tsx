import * as React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import BookPage from './BookPage'
import Buttons from '../../atoms/Buttons/Buttons'
import { getBookDetail } from '../../apis/Requests'
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
    render(<BookPage />)
    const grid = screen.getByTestId('book_page')
    expect(grid).toBeInTheDocument();
})

test('loads and displays data', async () => {
    render(<BookPage />)
   const response = await getBookDetail('1')
   expect(response).toEqual({id: '1', data: '12'})
    
})




