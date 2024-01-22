import { requestFactory } from './requester';

const baseUrl = process.env.REACT_APP_BASE_URL_AUTH_SERVICE;

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        changePassword: (data) => request.post(`${baseUrl}/change-password`, data),
        resetPasswordStepOne: (data) => request.post(`${baseUrl}/reset-password`, data),
        resetPasswordStepTwo: (data) => request.post(`${baseUrl}/reset-password-send-code`, data),
        resetPasswordStepThree: (data) => request.post(`${baseUrl}/reset-password-change-password`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    };
};