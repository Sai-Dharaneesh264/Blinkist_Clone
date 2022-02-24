import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from './Banner'

import "@testing-library/jest-dom"

it('checks whether the component renders properly', () => {
    render(<Banner />)
})

it("checks the text in the banner component", () => {
    render(<Banner />)
    const element = screen.getByText(/Explore books on/i)
    expect(element).toBeInTheDocument();
})

it('checks the alt text of img element', () => {
    render(<Banner />)
    const element = screen.getByAltText('banner');
    expect(element).toHaveAttribute('src')
})