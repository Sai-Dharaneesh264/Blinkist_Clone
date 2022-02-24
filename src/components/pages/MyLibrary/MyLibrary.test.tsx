import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import MyLibrary from './MyLibrary'


it('checks whether the component renders properly', () => {
    render(<MyLibrary />)

})