import React from 'react';
import { getByAltText, render, screen } from '@testing-library/react';
import CardShip from '../components/CardShip/CardShip';

test('must display a h4 & h5 elements in CardShip', () => {
    const component = render(<CardShip />)
    const titleh4 = component.container.querySelector('h4');
    const titleh5 = component.container.querySelector('h5');
    screen.debug(titleh4);
    screen.debug(titleh5);
});
