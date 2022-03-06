import React from 'react'
import { screen, render } from '@testing-library/react'
import BooksGroup from './BooksGroup'
import "@testing-library/jest-dom"

import { Provider } from 'react-redux'
import { store } from '../../../store/store'

it('checks whether component renders properly', () => {
    render(<Provider store={store}><BooksGroup title="trending"/></Provider>)
})

it('checks the title text', () => {
    render(<Provider store={store}><BooksGroup title="trending" /></Provider>)
    const element = screen.getByText('trending')
    expect(element).toBeInTheDocument();
})