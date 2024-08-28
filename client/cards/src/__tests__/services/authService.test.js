import { authServiceFactory } from '../../services/authService';
import { requestFactory } from '../../services/requester';

jest.mock('../../services/requester');

describe('authServiceFactory', () => {
    let request;
    let authService;
    const mockToken = 'test-token';

    beforeEach(() => {
        request = {
            post: jest.fn(),
            get: jest.fn(),
        };
        requestFactory.mockReturnValue(request);
        authService = authServiceFactory(mockToken);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('calls login endpoint with correct data', async () => {
        const loginData = { username: 'user', password: 'pass' };
        await authService.login(loginData);
        
        expect(request.post).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_AUTH_SERVICE}/login`, loginData);
    });

    it('calls register endpoint with correct data', async () => {
        const registerData = { username: 'user', email: 'user@example.com', password: 'pass' };
        await authService.register(registerData);

        expect(request.post).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_AUTH_SERVICE}/register`, registerData);
    });

    it('calls changePassword endpoint with correct data', async () => {
        const changePasswordData = { oldPassword: 'oldPass', newPassword: 'newPass' };
        await authService.changePassword(changePasswordData);

        expect(request.post).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_AUTH_SERVICE}/change-password`, changePasswordData);
    });

    it('calls resetPasswordStepOne with correct data', async () => {
        const resetData = { email: 'user@example.com' };
        await authService.resetPasswordStepOne(resetData);

        expect(request.post).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_AUTH_SERVICE}/reset-password`, resetData);
    });

    it('calls resetPasswordStepTwo with correct data', async () => {
        const codeData = { code: '123456' };
        await authService.resetPasswordStepTwo(codeData);

        expect(request.post).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_AUTH_SERVICE}/reset-password-send-code`, codeData);
    });

    it('calls resetPasswordStepThree with correct data', async () => {
        const newPasswordData = { code: '123456', newPassword: 'newPass' };
        await authService.resetPasswordStepThree(newPasswordData);

        expect(request.post).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_AUTH_SERVICE}/reset-password-change-password`, newPasswordData);
    });

    it('calls logout endpoint', async () => {
        await authService.logout();

        expect(request.get).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_AUTH_SERVICE}/logout`);
    });
});
