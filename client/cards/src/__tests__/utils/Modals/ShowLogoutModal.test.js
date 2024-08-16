import { render, screen, fireEvent } from '@testing-library/react';
import { ShowLogoutModal } from '../../../utils/Modals/logouthModal/ShowLogoutModal';

describe('ShowLogoutModal Component', () => {
    test('renders correctly and handles button clicks', () => {
        const mockOnLoadLogoutModal = jest.fn();
        render(<ShowLogoutModal onLoadLogoutModal={mockOnLoadLogoutModal} />);
        expect(screen.getByText('Are you sure you want to logout?')).toBeInTheDocument();
        expect(screen.getByText('No')).toBeInTheDocument();
        expect(screen.getByText('Yes')).toBeInTheDocument();

        fireEvent.click(screen.getByText('No'));
        expect(mockOnLoadLogoutModal).toHaveBeenCalledWith('No');

        fireEvent.click(screen.getByText('Yes'));
        expect(mockOnLoadLogoutModal).toHaveBeenCalledWith('Yes');
    });

    // test('should handle clicks outside the modal to close with "No"', () => {
    //     const mockOnLoadLogoutModal = jest.fn();
    //     render(<ShowLogoutModal onLoadLogoutModal={mockOnLoadLogoutModal} />);
    //     fireEvent.click(screen.getByRole('presentation'));
    //     expect(mockOnLoadLogoutModal).toHaveBeenCalledWith('No');
    // });
});
