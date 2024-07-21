import { checkForDiscount } from "../../functions/checkForDiscount";

describe('checkForDiscount', () => {
  test('applies discount correctly', () => {
    const price = 100;
    const discount = 20; // 20% discount
    const expectedFinalPrice = (price - (price * (discount / 100))).toFixed(2);

    expect(checkForDiscount(price, discount)).toBe(expectedFinalPrice);
  });

  test('returns the original price when no discount is provided', () => {
    const price = 100;

    expect(checkForDiscount(price, 0)).toBe(price.toFixed(2));
  });

  test('returns the original price when discount is undefined', () => {
    const price = 100;

    expect(checkForDiscount(price, undefined)).toBe(price.toFixed(2));
  });

  test('handles zero price correctly', () => {
    const price = 0;
    const discount = 50; // 50% discount

    expect(checkForDiscount(price, discount)).toBe(price.toFixed(2));
  });

  test('handles price as undefined', () => {
    const price = undefined;
    const discount = 20;

    expect(checkForDiscount(price, discount)).toBe('NaN');
  });
  
  test('handles price as null', () => {
    const price = null;
    const discount = 20;

    expect(checkForDiscount(price, discount)).toBe('0.00');
  });

  test('handles non-numeric price', () => {
    const price = 'abc';
    const discount = 20;

    expect(checkForDiscount(price, discount)).toBe('NaN');
  });
});
