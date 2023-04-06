import React from 'react';
import { getByAltText, render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

test('must display the Login & SingUp options in Header', () => {
    render(<Header />);
    screen.debug();
    const login = screen.getByText(/login/i);
    const singup = screen.getByText(/singup/i);
    expect(login).toBeInTheDocument();
    expect(singup).toBeInTheDocument();
});
