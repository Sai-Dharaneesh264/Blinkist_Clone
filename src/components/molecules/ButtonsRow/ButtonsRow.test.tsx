import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import ButtonsRow from './ButtonsRow'


test('check the finished reading button', () => {
    render(<ButtonsRow />)
    const finishButton = screen.getByTestId('finish')
    expect(finishButton).toBeInTheDocument();
})