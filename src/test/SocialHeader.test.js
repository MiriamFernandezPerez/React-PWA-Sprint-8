import React from 'react';
import { getByAltText, render, screen } from '@testing-library/react';
import SocialHeader from '../components/SocialHeader/SocialHeader';

test('must display a link', () => {

    const component = render(<SocialHeader />)

    const linkItem = component.container.querySelector('a')
    expect(linkItem).toBeInTheDocument();

});

