import { saveFiveItemsInLocalStorage } from "../../functions/saveFiveItemsInLocalStorage";

describe('saveFiveItemsInLocalStorage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('adds a new card to localStorage', () => {
        const card = { title: 'Card 1', price: 10 };
        let d = new Date();
        let time = d.getTime();

        saveFiveItemsInLocalStorage(card);

        expect(localStorage.getItem('Card 1')).toEqual(JSON.stringify({ ...card, time: time }));
    });

    test('keeps only five items in localStorage', () => {
        for (let i = 1; i <= 6; i++) {
            saveFiveItemsInLocalStorage({ title: `Card ${i}`, price: i * 10 });
        }
        expect(Object.keys(localStorage).length).toBe(6);
    });

    test('removes the oldest card when adding a sixth card', () => {
        for (let i = 1; i <= 5; i++) {
            const time = Date.now() - i * 1000;
            localStorage.setItem(`Card ${i}`, JSON.stringify({ title: `Card ${i}`, price: i * 10, time }));
        }

        saveFiveItemsInLocalStorage({ title: 'Card 6', price: 60 });
        expect(localStorage.getItem('Card 0')).toBeNull();
        expect(localStorage.getItem('Card 6')).toBeDefined();
    });

    test('returns an array of items stored in localStorage', () => {
        const card1 = { title: 'Card 1', price: 10 };
        const card2 = { title: 'Card 2', price: 20 };

        saveFiveItemsInLocalStorage(card1);
        saveFiveItemsInLocalStorage(card2);
        const result = saveFiveItemsInLocalStorage(card2);

        expect(result).toEqual([
            { ...card1, time: expect.any(Number) },
            { ...card2, time: expect.any(Number) }
        ]);
    });

    test('handles empty localStorage gracefully', () => {
        const card = { title: 'Card 1', price: 10 };
        saveFiveItemsInLocalStorage(card)
        const result = saveFiveItemsInLocalStorage(card);

        let d = new Date();
        let time = d.getTime();

        expect(result).toEqual([
            { ...card, time: time }
        ]);
    });

    test('does nothing if card has no title', () => {
        const card = { price: 10 };
        const result = saveFiveItemsInLocalStorage(card);

        expect(result).toEqual([]);
        expect(localStorage.length).toBe(0);
    });
});