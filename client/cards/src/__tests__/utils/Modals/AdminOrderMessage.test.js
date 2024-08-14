import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AdminOrderMessage } from '../../../utils/Modals/adminOrderMessage/AdminOrderMessage';


describe('AdminOrderMessage Component', () => {
    const mockMessageModalHandle = jest.fn();

    const client = 'John Doe';
    const message = 'Your order has been shipped!';

    beforeEach(() => {
        render(
            <AdminOrderMessage
                client={client}
                message={message}
                messageModalHandle={mockMessageModalHandle}
            />
        );
    });

    it('renders the client and message correctly', () => {
        expect(screen.getByText(`Client: ${client}`)).toBeInTheDocument();
        expect(screen.getByText(message)).toBeInTheDocument();
    });

    it('calls messageModalHandle when the Close button is clicked', () => {
        const button = screen.getByText('Close');
        fireEvent.click(button);
        expect(mockMessageModalHandle).toHaveBeenCalledTimes(1);
    });
});
