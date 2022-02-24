import React from 'react'
import { render } from '@testing-library/react'
import MyLibrary from './MyLibrary'

import "@testing-library/jest-dom"

it('checks whether the component renders properly', () => {
    render(<MyLibrary />)

})