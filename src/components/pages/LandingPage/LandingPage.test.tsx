import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import LandingPage from './LandingPage'


it('checks whether the component renders properly', () => {
    render(<LandingPage />)
})