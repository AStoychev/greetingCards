import { requestFactory } from "../../services/requester";
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('requester', () => {
    beforeEach(() => {
        fetch.resetMocks();
        localStorage.clear();
    });

    test('should make a GET request successfully', async () => {
        const mockData = { data: 'test' };
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const requester = requestFactory();
        const result = await requester.get('http://example.com');

        expect(result).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith('http://example.com', {});
    });

    test('should make a POST request successfully with data', async () => {
        const mockData = { data: 'test' };
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const requester = requestFactory();
        const postData = { password: 'password123' };
        const result = await requester.post('http://example.com', postData);

        expect(result).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith('http://example.com', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                password: 'password123',
                repeatPassword: 'password123',  // This is set in the request body by the requester function
            }),
        });
    });

    test('should include token in headers when present in localStorage', async () => {
        const mockData = { data: 'test' };
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const auth = { accessToken: 'token123' };
        localStorage.setItem('auth', JSON.stringify(auth));

        const requester = requestFactory();
        await requester.get('http://example.com');

        expect(fetch).toHaveBeenCalledWith('http://example.com', {
            headers: {
                'X-Authorization': 'token123',
            },
        });
    });

    test('should clear localStorage on 403 response', async () => {
        fetch.mockResponseOnce(JSON.stringify({ error: 'Forbidden' }), { status: 403 });

        const auth = { accessToken: 'token123' };
        localStorage.setItem('auth', JSON.stringify(auth));

        const requester = requestFactory();

        try {
            await requester.get('http://example.com');
        } catch (e) {
            expect(e.error).toBe('Forbidden');
        }

        expect(localStorage.getItem('auth')).toBeNull();
    });

    test('should throw error on non-200 status', async () => {
        const errorMessage = { error: 'Bad Request' };
        fetch.mockResponseOnce(JSON.stringify(errorMessage), { status: 400 });

        const requester = requestFactory();

        await expect(requester.get('http://example.com')).rejects.toEqual(errorMessage);
    });

    test('should handle empty response body (204 No Content)', async () => {
        fetch.mockResponseOnce('', { status: 204 });

        const requester = requestFactory();
        const result = await requester.delete('http://example.com');

        expect(result).toEqual({});
        expect(fetch).toHaveBeenCalledWith('http://example.com', {
            method: 'DELETE',
        });
    });
});
