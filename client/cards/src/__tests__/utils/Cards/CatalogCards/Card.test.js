import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Card } from '../../../../utils/Cards/CatalogCards/Card';
import { checkForDiscount } from '../../../../functions/checkForDiscount';
import { AddToCardButton } from '../../../../utils/Cards/AddToCardButton/AddToCardButton';

jest.mock('../../../../functions/checkForDiscount');
jest.mock('../../../../utils/Cards/AddToCardButton/AddToCardButton', () => ({
    AddToCardButton: jest.fn(() => <div>AddToCardButton</div>),
}));

describe('Card Component', () => {
    const mockNavigate = jest.fn();

    // Mock the useNavigate hook from react-router-dom
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

    const cardMock = {
        _id: '1',
        title: 'Sample Card',
        price: 100,
        discount: 10,
        imageUrl: 'defaultImage.jpg',
        additionalImage: ['hoverImage.jpg'],
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders card component with correct title and price', () => {
        checkForDiscount.mockReturnValue(90); // Mock discount function

        render(
            <Router>
                <Card card={cardMock} />
            </Router>
        );

        expect(screen.getByText('Sample Card')).toBeInTheDocument();
        expect(screen.getByText('Price: 90')).toBeInTheDocument();
        expect(screen.getByAltText('productImage')).toHaveAttribute('src', 'defaultImage.jpg');
        // expect(screen.getByText('AddToCardButton')).toBeInTheDocument();
    });

    // test('navigates to the correct page on article click', () => {
    //     render(
    //         <Router>
    //             <Card card={cardMock} />
    //         </Router>
    //     );

    //     const imageElement = screen.getByAltText('productImage');
    //     fireEvent.click(imageElement);

    //     expect(mockNavigate).toHaveBeenCalledWith('/catalog/1');
    // });

    test('changes image on mouse over and reverts on mouse leave', () => {
        render(
            <Router>
                <Card card={cardMock} />
            </Router>
        );

        const imageElement = screen.getByAltText('productImage');

        // Simulate mouse enter
        fireEvent.mouseEnter(imageElement);
        expect(imageElement).toHaveAttribute('src', 'hoverImage.jpg');

        // Simulate mouse leave
        fireEvent.mouseLeave(imageElement);
        expect(imageElement).toHaveAttribute('src', 'defaultImage.jpg');
    });

    test('calls checkForDiscount with correct arguments', () => {
        render(
            <Router>
                <Card card={cardMock} />
            </Router>
        );

        expect(checkForDiscount).toHaveBeenCalledWith(cardMock.price, cardMock.discount);
    });

    test('renders AddToCardButton with correct props', () => {
        render(
            <Router>
                <Card card={cardMock} />
            </Router>
        );

        expect(AddToCardButton).toHaveBeenCalledWith({ card: cardMock }, {});
    });
});
