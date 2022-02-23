import React from 'react'
import { screen, render, within } from '@testing-library/react'
import NavItem from './NavItem'


test('to check whether the text renders', () => {
    render(<NavItem children="click me" />)
    const data = screen.getByText('click me');
    expect(data).toBeInTheDocument();
})