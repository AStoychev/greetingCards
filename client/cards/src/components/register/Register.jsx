import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        repeatPassword: '',

    }, onRegisterSubmit);
    
    return (
        <div className="container">
            <div>
                <h1>Regiter</h1>
                <div>
                    <section id="register-page" className="content auth">
                        <form id="register" method='POST' onSubmit={onSubmit}>
                            <div className='field-register'>

                                <label className='htmlContent' htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="livingwall@gmail.com"
                                    value={values.email}
                                    onChange={changeHandler}
                                // onClick={onClickEmail}
                                // onBlur={onBlurEmail}
                                />

                                <label className='htmlContent' htmlFor="username">Username:</label>
                                <input
                                    type="username"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={values.username}
                                    onChange={changeHandler}
                                // onClick={onClickUsername}
                                // onBlur={onBlurUsername}
                                />
                                <label className='htmlContent' htmlFor="pass">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="register-password"
                                    placeholder="******"
                                    value={values.password}
                                    onChange={changeHandler}
                                // onClick={onClickPassword}
                                // onBlur={onBlurPass}
                                />
                                <label className='htmlContent' htmlFor="con-pass">Confirm Password:</label>
                                <input
                                    type="password"
                                    name="repeatPassword"
                                    id="repeatPassword"
                                    placeholder="******"
                                    value={values.repeatPassword}
                                    onChange={changeHandler}
                                // onClick={onClickConfirmPassword}
                                // onBlur={onBlurRepeatPassword}
                                />
                            </div>
                            <div className="submit">
                                <input className="submit" type="submit" value="Create" style={{ marginTop: "21px" }} />
                            </div>
                        </form>
                    </section>
                </div>

            </div>

        </div>
    )
}