import { validateImageUrl, validateAddCardFileds } from "../../functions/validateAddAndEditFields";


describe('validateImageUrl', () => {
    test('returns true for valid HTTPS image URLs', () => {
        const validUrls = [
            'https://example.com/image.png',
            'https://www.example.com/image.jpg',
            'https://example.co.uk/path/to/image.gif',
            'https://subdomain.example.com/image.jpeg',
            'https://example.com/path/to/image.webp?query=123',
            'https://example.com/path/to/image.png#hash'
        ];

        validUrls.forEach(url => {
            expect(validateImageUrl(url)).toBe(true);
        });
    });

    test('returns false for invalid image URLs', () => {
        const invalidUrls = [
            'http://example.com/image.png',  // Not HTTPS
            'ftp://example.com/image.jpg',   // Wrong protocol
            'https://.com/image.gif',        // Missing domain
            'example.com/image.jpg',         // Missing protocol
        ];

        invalidUrls.forEach(url => {
            expect(validateImageUrl(url)).toBe(false);
        });
    });
});

describe('validateAddCardFileds', () => {
    test('returns true for valid card data', () => {
        const validData = {
            title: 'Sample Title',
            description: 'This is a sample description with sufficient length.',
            price: 50,
            imageUrl: 'https://example.com/image.jpg'
        };

        expect(validateAddCardFileds(validData)).toBe(true);
    });

    test('returns false for invalid card data with short title', () => {
        const invalidData = {
            title: 'A',  // Too short
            description: 'This is a valid description.',
            price: 50,
            imageUrl: 'https://example.com/image.jpg'
        };

        expect(validateAddCardFileds(invalidData)).toBe(false);
    });

    test('returns false for invalid card data with short description', () => {
        const invalidData = {
            title: 'Valid Title',
            description: 'Short',  // Too short
            price: 50,
            imageUrl: 'https://example.com/image.jpg'
        };

        expect(validateAddCardFileds(invalidData)).toBe(false);
    });

    test('returns false for invalid card data with non-positive price', () => {
        const invalidData = {
            title: 'Valid Title',
            description: 'This is a valid description.',
            price: 0,  // Not greater than zero
            imageUrl: 'https://example.com/image.jpg'
        };

        expect(validateAddCardFileds(invalidData)).toBe(false);
    });

    test('returns false for invalid card data with invalid image URL', () => {
        const invalidData = {
            title: 'Valid Title',
            description: 'This is a valid description.',
            price: 50,
            imageUrl: 'http://example.com/image.jpg'  // Not HTTPS
        };

        expect(validateAddCardFileds(invalidData)).toBe(false);
    });
});
