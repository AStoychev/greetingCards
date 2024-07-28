import { validateOrder } from "../../functions/validateOrder";

describe('validateOrder', () => {
    const validOrder = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '1234567890',
        shippingCompany: 'FedEx',
        shippingPlace: 'Warehouse A',
        city: 'New York',
        postCode: '10001',
        address: '123 Main St',
        orders: ['item1', 'item2'],
        payment: 'Credit Card'
    };

    test('returns true for a valid order', () => {
        expect(validateOrder(validOrder)).toBe(true);
    });

    test('returns false if firstName is missing', () => {
        const order = { ...validOrder, firstName: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if lastName is missing', () => {
        const order = { ...validOrder, lastName: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if email is missing', () => {
        const order = { ...validOrder, email: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if phoneNumber is missing', () => {
        const order = { ...validOrder, phoneNumber: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if shippingCompany is missing', () => {
        const order = { ...validOrder, shippingCompany: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if shippingPlace is missing', () => {
        const order = { ...validOrder, shippingPlace: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if city is missing', () => {
        const order = { ...validOrder, city: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if postCode is missing', () => {
        const order = { ...validOrder, postCode: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if address is missing', () => {
        const order = { ...validOrder, address: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if orders array is empty', () => {
        const order = { ...validOrder, orders: [] };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if payment method is missing', () => {
        const order = { ...validOrder, payment: '' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns false if any field contains only whitespace', () => {
        const order = { ...validOrder, address: '   ' };
        expect(validateOrder(order)).toBe(false);
    });

    test('returns true for edge cases with valid data', () => {
        const order = { ...validOrder, firstName: 'A', city: 'B' };
        expect(validateOrder(order)).toBe(true);
    });
});

