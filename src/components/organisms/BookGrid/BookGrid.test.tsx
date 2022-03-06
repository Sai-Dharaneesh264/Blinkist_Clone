import * as React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BookGrid from './BookGrid'
import Buttons from '../../atoms/Buttons/Buttons'
import { getBooks } from '../../../features/BooksReducer'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

import "@testing-library/jest-dom"

const server = setupServer(
    rest.get('http://localhost:3004/books', (req, res, ctx) => {
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
    render(<Provider store={store}><BookGrid children={<Buttons children="click me" />} /> </Provider>)
    const grid = screen.getByTestId('grid_container')
    expect(grid).toBeInTheDocument();
})






