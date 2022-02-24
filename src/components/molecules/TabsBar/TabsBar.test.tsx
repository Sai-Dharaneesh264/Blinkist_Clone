import React from 'react'
import { screen, render } from '@testing-library/react'
import TabsBar from './TabsBar'

import "@testing-library/jest-dom"

it('checks whether component renders properly', () => {
    render(<TabsBar/>)
})

it('checks currently reading in the component', () => {
    render(<TabsBar />)
    const element = screen.getByText('Currently reading')
    expect(element).toBeInTheDocument();
})

it('checks Finished in the component', () => {
    render(<TabsBar />)
    const element = screen.getByText('Finished')
    expect(element).toBeInTheDocument();
})