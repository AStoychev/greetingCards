import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',

    }, onLoginSubmit);

    return (
        <div className="container">
            <div>
                <h1>Login</h1>
                <div>
                    <section id="register-page" className="content auth">
                        <form id="register" method='POST' onSubmit={onSubmit}>
                            <div className='field-register'>

                                <label className='htmlContent' htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="livingwall@gmail.com"
                                    name={LoginFormKeys.Email}
                                    value={values[LoginFormKeys.Email]}
                                    onChange={changeHandler}
                                // onClick={onClickEmail}
                                // onBlur={onBlurEmail}
                                />

                                <label className='htmlContent' htmlFor="pass">Password:</label>
                                <input
                                    type="password"
                                    id="register-password"
                                    placeholder="******"
                                    name={LoginFormKeys.Password}
                                    value={values[LoginFormKeys.Password]}
                                    onChange={changeHandler}
                                // onClick={onClickPassword}
                                // onBlur={onBlurPass}
                                />
                            </div>
                            <div className="submit">
                                <input type="submit" className="submit-btn" value="Login" />
                            </div>
                        </form>
                    </section>
                </div>

            </div>

        </div>
    )
}