import React from 'react'
import { screen, render } from '@testing-library/react'
import BooksGroup from './BooksGroup'
import "@testing-library/jest-dom"


it('checks whether component renders properly', () => {
    render(<BooksGroup title="trending"/>)
})

it('checks the title text', () => {
    render(<BooksGroup title="trending" />)
    const element = screen.getByText('trending')
    expect(element).toBeInTheDocument();
})