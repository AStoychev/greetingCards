import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/users`;

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        changePassword: (data) => request.post(`${baseUrl}/change-password`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    };
};