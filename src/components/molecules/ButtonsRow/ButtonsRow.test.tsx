import React from 'react'
import { render } from '@testing-library/react'
import ButtonsRow from './ButtonsRow'

import "@testing-library/jest-dom"

test('check the read more buttons', () => {
    render(<ButtonsRow />)
})