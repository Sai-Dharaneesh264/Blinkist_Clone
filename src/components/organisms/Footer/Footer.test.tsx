import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Footer from './Footer'


test('checks whether the component renders properly', () => {
    render(<Footer />)
})

test('checks the content', () => {
    render(<Footer />)
    const imgElement = screen.getByAltText('logo');
    expect(imgElement).toBeInTheDocument()
})

test('checks the text content', () => {
    render(<Footer />)
    const element = screen.getByText(/Big ideas/i);
    expect(element).toBeInTheDocument()
})