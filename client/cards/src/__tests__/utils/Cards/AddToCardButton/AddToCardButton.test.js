import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddToCardButton } from '../../../../utils/Cards/AddToCardButton/AddToCardButton';

const mockLocalStorage = (function () {
    let store = {};
    return {
        getItem: function (key) {
            return key in store ? store[key] : null;
        },
        setItem: function (key, value) {
            store[key] = value.toString();
        },
        removeItem: function (key) {
            delete store[key];
        },
        clear: function () {
            store = {};
        },
    };
})();
Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
});

describe('AddToCardButton Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders button correctly', () => {
        const mockCard = { _id: '123', quantity: 0 };
        render(<AddToCardButton card={mockCard} />);
        expect(screen.getByText('Add to Cart')).toBeInTheDocument();
    });

    test('adds new card to localStorage when clicked', () => {
        const mockCard = { _id: '123', quantity: 0 };
        render(<AddToCardButton card={mockCard} />);
        fireEvent.click(screen.getByText('Add to Cart'));
        expect(localStorage.getItem('orders 123')).toEqual(JSON.stringify({ _id: '123', quantity: 1 }));
    });

    test('increases quantity if card already exists in localStorage', () => {
        const mockCard = { _id: '123', quantity: 1 };
        localStorage.setItem('orders 123', JSON.stringify({ _id: '123', quantity: 2 }));
        render(<AddToCardButton card={mockCard} />);
        fireEvent.click(screen.getByText('Add to Cart'));
        expect(localStorage.getItem('orders 123')).toEqual(JSON.stringify({ _id: '123', quantity: 3 }));
    });
});
