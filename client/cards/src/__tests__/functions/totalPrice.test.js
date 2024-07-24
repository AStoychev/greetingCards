import { totalPrice } from '../../functions/totalPrice';

import { showAllPurchase } from '../../functions/localStorageFunction/showAllPurchase';
import { checkForDiscount } from '../../functions/checkForDiscount';

jest.mock('../../functions/localStorageFunction/showAllPurchase', () => ({
    showAllPurchase: jest.fn(),
}));

jest.mock('../../functions/checkForDiscount', () => ({
    checkForDiscount: jest.fn(),
}));

describe('totalPrice', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('calculates total price correctly with multiple purchases', () => {
        const purchases = [
            { price: 100, discount: 20, quantity: 2 },
            { price: 50, discount: 0, quantity: 1 },
            { price: 200, discount: 10, quantity: 1 }
        ];

        showAllPurchase.mockReturnValue(purchases);
        checkForDiscount
            .mockReturnValueOnce(80)
            .mockReturnValueOnce(50)
            .mockReturnValueOnce(180);

        const result = totalPrice();

        expect(result).toBe('390.00');
    });

    test('calculates total price with no purchases', () => {
        showAllPurchase.mockReturnValue([]);

        const result = totalPrice();

        expect(result).toBe('0.00');
    });

    test('calculates total price correctly with discounts', () => {
        const purchases = [
            { price: 100, discount: 50, quantity: 1 },
            { price: 150, discount: 20, quantity: 2 }
        ];

        showAllPurchase.mockReturnValue(purchases);
        checkForDiscount
            .mockReturnValueOnce(50)
            .mockReturnValueOnce(120);

        const result = totalPrice();

        expect(result).toBe('290.00');
    });

    test('calculates total price correctly without discounts', () => {
        const purchases = [
            { price: 100, discount: 0, quantity: 3 },
            { price: 200, discount: 0, quantity: 1 }
        ];

        showAllPurchase.mockReturnValue(purchases);
        checkForDiscount
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200);

        const result = totalPrice();

        expect(result).toBe('500.00');
    });

    test('handles purchases with zero quantity correctly', () => {
        const purchases = [
            { price: 100, discount: 20, quantity: 0 },
            { price: 50, discount: 0, quantity: 2 }
        ];

        showAllPurchase.mockReturnValue(purchases);
        checkForDiscount
            .mockReturnValueOnce(80)
            .mockReturnValueOnce(50);

        const result = totalPrice();

        expect(result).toBe('100.00');
    });
});
