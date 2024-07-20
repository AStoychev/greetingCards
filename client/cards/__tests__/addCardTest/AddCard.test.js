import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AddCard } from '../../src/components/addCard/AddCard';

test('renders the correct addCard', () => {
    render(<AddCard/>);
    const addCard = screen.getByText(/Add Card/i);
    expect(addCard).toBeInTheDocument();
});