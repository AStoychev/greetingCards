// CardSaveFiveVisited.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { CardSaveFiveVisited } from '../../../../utils/Cards/CardSaveFiveVisited/CardSaveFiveVisited';
import { checkForDiscount } from '../../../../functions/checkForDiscount';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('../../../../functions/checkForDiscount', () => ({
    checkForDiscount: jest.fn(),
}));

describe('CardSaveFiveVisited Component', () => {
    const mockNavigate = jest.fn();
    const card = {
        _id: '1',
        title: 'Sample Card',
        price: 100,
        discount: 10,
        imageUrl: 'https://example.com/image.jpg',
        additionalImage: ['https://example.com/additional-image.jpg'],
    };

    beforeEach(() => {
        useNavigate.mockReturnValue(mockNavigate);
        checkForDiscount.mockReturnValue(90); // Assume the discount calculation returns 90
    });

    test('renders without crashing', () => {
        render(<CardSaveFiveVisited card={card} />);

        // Check if the title is rendered
        expect(screen.getByText('Sample Card')).toBeInTheDocument();

        // Check if the price is rendered correctly
        expect(screen.getByText('Price: 90')).toBeInTheDocument();

        // Check if the image is rendered
        expect(screen.getByAltText('productImage')).toHaveAttribute('src', card.imageUrl);

        // Check if the "Add to Cart" button is present
        expect(screen.getByText('Add to Cart')).toBeInTheDocument();
    });

    test('navigates to card detail on article click', () => {
        render(<CardSaveFiveVisited card={card} />);

        const article = screen.getByRole('article');
        fireEvent.click(article);

        expect(mockNavigate).toHaveBeenCalledWith('/catalog/1');
    });

    test('changes image on mouse over and mouse leave', () => {
        render(<CardSaveFiveVisited card={card} />);

        const image = screen.getByAltText('productImage');

        // Mouse over event
        fireEvent.mouseEnter(image);
        expect(image).toHaveAttribute('src', card.additionalImage[0]);

        // Mouse leave event
        fireEvent.mouseLeave(image);
        expect(image).toHaveAttribute('src', card.imageUrl);
    });

    test('calls checkForDiscount correctly', () => {
        render(<CardSaveFiveVisited card={card} />);

        expect(checkForDiscount).toHaveBeenCalledWith(card.price, card.discount);
    });
});
