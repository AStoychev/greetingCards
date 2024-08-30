import { orderServiceFactory } from '../../services/orderService';
import { requestFactory } from '../../services/requester';

jest.mock('../../services/requester');

describe('orderServiceFactory', () => {
    const token = 'test-token';
    let request;

    beforeEach(() => {
        request = {
            get: jest.fn(),
            post: jest.fn(),
            put: jest.fn(),
        };
        requestFactory.mockReturnValue(request);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should call getAll and return orders', async () => {
        const mockOrders = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];
        request.get.mockResolvedValueOnce(mockOrders);

        const orderService = orderServiceFactory(token);
        const orders = await orderService.getAll();

        expect(request.get).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_ORDER_SERVICE}/get-all-order`);
        expect(orders).toEqual(mockOrders);
    });
    it('should call getOne and return a specific order', async () => {
        const mockOrder = { id: 1, name: 'Order 1' };
        request.get.mockResolvedValueOnce(mockOrder);

        const orderService = orderServiceFactory(token);
        const order = await orderService.getOne(1);

        expect(request.get).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_ORDER_SERVICE}/1`);
        expect(order).toEqual(mockOrder);
    });
    it('should call create and return the created order', async () => {
        const orderData = { name: 'New Order' };
        const mockResponse = { id: 3, name: 'New Order' };
        request.post.mockResolvedValueOnce(mockResponse);

        const orderService = orderServiceFactory(token);
        const result = await orderService.create(orderData);

        expect(request.post).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_ORDER_SERVICE}/make-order`, orderData);
        expect(result).toEqual(mockResponse);
    });
    it('should call changeStatusOrder with the correct parameters', async () => {
        const orderId = 1;
        const statusData = { status: 'shipped' };

        request.put.mockResolvedValueOnce({});

        const orderService = orderServiceFactory(token);
        await orderService.changeStatusOrder(orderId, statusData);

        expect(request.put).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_ORDER_SERVICE}/${orderId}/change-status`, statusData);
    });
});
