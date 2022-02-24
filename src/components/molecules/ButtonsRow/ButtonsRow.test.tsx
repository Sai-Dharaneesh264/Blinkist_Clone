import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import ButtonsRow from './ButtonsRow'

it('check the read more buttons', () => {
    render(<ButtonsRow />)
})