import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Partners } from '../../../utils/Partners/Partners';

describe('Partners Component', () => {
    test('renders all partner images with correct src attributes', () => {
        render(<Partners />);

        const expectedSources = [
            "./images/partners.jpg",
            "./images/partners.jpg",
            "./images/partners.jpg",
            "./images/partners.jpg",
            "./images/partners.jpg",
            "./images/partners.jpg",
            "./images/partners.jpg",
        ];

        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(expectedSources.length);
        images.forEach((img, index) => {
            expect(img).toHaveAttribute('src', expectedSources[index]);
        });
    });

    // test('applies the correct CSS classes', () => {
    //     render(<Partners />);

    //     const mainDivPartner = screen.getByRole('img', { hidden: true }).closest('div');
    //     expect(mainDivPartner).toHaveClass(styles.mainDivPartner);

    //     const flexRow = screen.getByRole('img', { hidden: true }).closest('div').parentElement;
    //     expect(flexRow).toHaveClass(styles.flexRow);

    //     const images = screen.getAllByRole('img');
    //     images.forEach(img => {
    //         const columnDiv = img.closest('div');
    //         expect(columnDiv).toHaveClass(styles.column);
    //         expect(img).toHaveClass(styles.imagPartners);
    //     });
    // });
});
