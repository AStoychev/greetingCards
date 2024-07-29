import { addToOrder } from "../../functions/addToOrder";

describe('addToOrder', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('returns filtered orders from localStorage', () => {
        localStorage.setItem('orders 1', JSON.stringify({ title: 'Item 1', price: 10 }));
        localStorage.setItem('orders 2', JSON.stringify({ title: 'Item 2', price: 20 }));
        localStorage.setItem('otherData', JSON.stringify({ title: 'Item 3', price: 30 }));

        const result = addToOrder();

        expect(result).toEqual([
            JSON.stringify({ title: 'Item 1', price: 10 }),
            JSON.stringify({ title: 'Item 2', price: 20 })
        ]);
    });

    test('returns an empty array when no orders are in localStorage', () => {
        const result = addToOrder();
        expect(result).toEqual([]);
    });

    test('handles localStorage keys with spaces correctly', () => {
        localStorage.setItem('orders 123', JSON.stringify({ title: 'Item 123', price: 15 }));
        const result = addToOrder();

        expect(result).toEqual([
            JSON.stringify({ title: 'Item 123', price: 15 })
        ]);
    });

    test('handles empty order values correctly', () => {
        localStorage.setItem('orders empty', JSON.stringify({}));
        const result = addToOrder();

        expect(result).toEqual([
            JSON.stringify({})
        ]);
    });

    test('calculates total price correctly (if needed)', () => {
        localStorage.setItem('orders 1', JSON.stringify({ title: 'Item 1', price: 10 }));
        localStorage.setItem('orders 2', JSON.stringify({ title: 'Item 2', price: 20 }));

        const result = addToOrder();
    });
});
