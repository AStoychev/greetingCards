import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';

// Handling
// Handling

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    // Try error
    const [errors, setError] = useState({});
    const [errorEmail, setErrorEmail] = useState({});
    const [errorResetPassword, setErrorResetPassword] = useState('OK');
    // Try error

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/');
            // navigate('/catalog');

        } catch (error) {
            if (error) {
                console.log('There is a problem Login')
            }
            // if (error) {
            //     setError(error)
            //     setTimeout(() => {
            //         setError({});
            //     }, 2000);
            // }

        }
    };


    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;
        // console.log(111111, values)
        if (repeatPassword !== registerData.password) {
            console.log('Password Mismatch')
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);
            navigate('/');
            // navigate('/catalog');

        } catch (error) {
            if (error) {
                console.log('There is a problem register')
            }
            // if (error) {
            //     setErrorEmail(error)
            //     setTimeout(() => {
            //         setErrorEmail({})
            //     }, 2000);
            // }

        }

    };

    const onChangePasswordSubmit = async (values) => {
        const { email, password, newPassword, repeatNewPassword } = values;
        if (repeatNewPassword !== newPassword) {
            console.log('Password Mismatch')
            return;
        }

        try {
            const result = await authService.changePassword({ ...values });

        } catch (error) {
            if (error) {
                console.log('There is a problem with change password')
            }
        }

    };

    const onResetPasswordSubmitStepOne = async (values) => {
        try {
            const result = await authService.resetPasswordStepOne({ ...values });
            navigate('/');
        } catch (error) {
            if (error) {
                console.log('There is a problem with reset password!')
            }
        }

    };

    const onResetPasswordSubmitStepTwo = async (values) => {
        try {
            const result = await authService.resetPasswordStepTwo({ ...values });
            if (result.error) {
                console.log('Error', result.error)
            } else {
                navigate(`/reset-password-step-three/${values.cryptEmail}`);
            }

        } catch (error) {
            if (error) {
                console.log('There is a problem with code reset password!')
            }
        }
    };

    const onResetPasswordSubmitStepThree = async (values) => {

        if (values.newPassword !== values.confirmNewPassword) {
            console.log('Password Mismatch')
            return;
        }
        try {
            const result = await authService.resetPasswordStepThree({ ...values });
            console.log('Result', result)

        } catch (error) {
            if (error) {
                console.log('There is a problem with change password!')
            }
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});

        // Try logout
        localStorage.removeItem('auth');
        // Try logout
    };

    // console.log(1111111111111, auth)

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onChangePasswordSubmit,
        onResetPasswordSubmitStepOne,
        onResetPasswordSubmitStepTwo,
        onResetPasswordSubmitStepThree,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        userName: auth.username,
        isAdmin: auth.admin,
        isAuthenticated: !!auth.accessToken,

        thisError: errors,
        errorEmail: errorEmail,
        errorResetPassword: errorResetPassword,
    };
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

// not necessary

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};