import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Header from './Header'


test('checks whether the component renders properly', () => {
    render(<Header />)
})

test('checks explore content', () => {
    render(<Header />)
    const element = screen.getByText('Explore')
    expect(element).toBeInTheDocument();

})

test('checks mylibrary', () => {
    render(<Header />)
    const element = screen.getByText(/My Library/i)
    expect(element).toBeInTheDocument();
    
})
