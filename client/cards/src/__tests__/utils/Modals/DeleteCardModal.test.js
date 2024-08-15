import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DeleteCardModal } from '../../../utils/Modals/deleteModal/DeleteCardModal';

describe('DeleteCardModal Component', () => {
    const mockOnLoadModal = jest.fn();

    beforeEach(() => {
        render(<DeleteCardModal title="Test Card" onLoadModal={mockOnLoadModal} />);
    });

    it('renders the modal with correct title and text', () => {
        expect(screen.getByText('Delete Test Card')).toBeInTheDocument();
        expect(screen.getByText('Are you sure you want to delete this card!')).toBeInTheDocument();
    });

    it('calls onLoadModal with "No" when the No button is clicked', () => {
        const noButton = screen.getByText('No');
        fireEvent.click(noButton);

        expect(mockOnLoadModal).toHaveBeenCalledWith('No');
    });

    it('calls onLoadModal with "Yes" when the Yes button is clicked', () => {
        const yesButton = screen.getByText('Yes');
        fireEvent.click(yesButton);

        expect(mockOnLoadModal).toHaveBeenCalledWith('Yes');
    });
});
