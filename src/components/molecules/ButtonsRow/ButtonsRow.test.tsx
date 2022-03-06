import React from 'react'
import { render, screen} from '@testing-library/react'
import ButtonsRow from './ButtonsRow'

import "@testing-library/jest-dom"

test('sample buttons row test', () => {
    render(<ButtonsRow />)
})