import { cardServiceFactory } from '../../services/cardService';
import { requestFactory } from '../../services/requester';

jest.mock('../../services/requester');

describe('cardServiceFactory', () => {
    const baseUrl = process.env.REACT_APP_BASE_URL_CARD_SERVICE;
    const token = 'fake-token';
    let requestMock;

    beforeEach(() => {
        requestMock = {
            get: jest.fn(),
            post: jest.fn(),
            put: jest.fn(),
            delete: jest.fn(),
        };
        requestFactory.mockReturnValue(requestMock);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('getAll should fetch all cards', async () => {
        const mockResponse = { 1: { id: 1, title: 'Card 1' }, 2: { id: 2, title: 'Card 2' } };
        requestMock.get.mockResolvedValue(mockResponse);

        const cardService = cardServiceFactory(token);
        const result = await cardService.getAll();

        expect(requestMock.get).toHaveBeenCalledWith(`${baseUrl}/all-cards`);
        expect(result).toEqual(Object.values(mockResponse));
    });

    it('getOne should fetch a single card by ID', async () => {
        const mockCard = { id: 1, title: 'Card 1' };
        requestMock.get.mockResolvedValue(mockCard);

        const cardService = cardServiceFactory(token);
        const result = await cardService.getOne(1);

        expect(requestMock.get).toHaveBeenCalledWith(`${baseUrl}/1`);
        expect(result).toEqual(mockCard);
    });

    it('create should post a new card', async () => {
        const mockCard = { title: 'New Card' };
        const mockResponse = { id: 1, ...mockCard };
        requestMock.post.mockResolvedValue(mockResponse);

        const cardService = cardServiceFactory(token);
        const result = await cardService.create(mockCard);

        expect(requestMock.post).toHaveBeenCalledWith(`${baseUrl}/add-card`, mockCard);
        expect(result).toEqual(mockResponse);
    });

    it('edit should update a card by ID', async () => {
        const cardId = 1;
        const updatedData = { title: 'Updated Title' };
        requestMock.put.mockResolvedValue({ success: true });

        const cardService = cardServiceFactory(token);
        const result = await cardService.edit(cardId, updatedData);

        expect(requestMock.put).toHaveBeenCalledWith(`${baseUrl}/${cardId}/edit`, updatedData);
        expect(result).toEqual({ success: true });
    });

    it('deleteCard should delete a card by ID', async () => {
        const cardId = 1;
        requestMock.delete.mockResolvedValue({ success: true });

        const cardService = cardServiceFactory(token);
        const result = await cardService.deleteCard(cardId);

        expect(requestMock.delete).toHaveBeenCalledWith(`${baseUrl}/${cardId}/delete`);
        expect(result).toEqual({ success: true });
    });
});
