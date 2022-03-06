import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import "@testing-library/jest-dom"
import LogoutButton from '../LogoutButton'



test('checks whether component renders', () => {
    render(<LogoutButton />)
    const element = screen.getByText('S')
    expect(element).toBeInTheDocument;
})






