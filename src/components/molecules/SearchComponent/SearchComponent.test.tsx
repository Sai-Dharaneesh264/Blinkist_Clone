import React from 'react'
import { screen, render } from '@testing-library/react'
import SearchComponent from './SearchComponent'

import "@testing-library/jest-dom"

it('checks whether the component renders properly', () => {
    render(<SearchComponent />)
})

it('checks the placeholder text', () => {
    render(<SearchComponent />)
    const element = screen.getByPlaceholderText('Search by title or author')
    expect(element).toBeInTheDocument()
})

// it('checks the on change text in component', () => {
//     render(<SearchComponent />)
//     const element = screen.getByPlaceholderText('Search by title or author')
//     fireEvent.change(element, {target: { value: "dharaneesh"}})
//     expect(element.value).toBe('dharaneesh')
// })