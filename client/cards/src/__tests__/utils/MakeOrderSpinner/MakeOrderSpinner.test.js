import React from 'react';
import { render, screen } from '@testing-library/react';
import { MakeOrderSpinner } from '../../../utils/Spinners/makeOrderSpinner/MakeOrderSpinner';

describe('MakeOrderSpinner Component', () => {
    test('renders without crashing', () => {
        render(<MakeOrderSpinner />);
        
        const spinnerContainer = screen.getByTestId('spinner-container');
        expect(spinnerContainer).toBeInTheDocument();
        
        const innerContainer = screen.getByTestId('inner-container');
        expect(innerContainer).toBeInTheDocument();
        
        const ldsEllipsis = screen.getByTestId('lds-ellipsis');
        expect(ldsEllipsis).toBeInTheDocument();
        
        expect(innerContainer.childElementCount).toBe(1);
        expect(ldsEllipsis.childElementCount).toBe(4);
    });
});
