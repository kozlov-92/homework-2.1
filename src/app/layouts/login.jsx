import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [typeForm, setTypeForm] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = () => {
        setTypeForm((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {/* eslint-disable  */}
                    {typeForm === "register" ? (
                        <>
                            <h3 className="mb-4">Регистрация</h3>
                            <RegisterForm />
                            <p>
                                Уже есть аккаунт?
                                <a role="button" onClick={toggleFormType}>
                                    Войти
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Введите логин и пароль</h3>
                            <LoginForm />
                            <p>
                                Нет аккаунта?
                                <a role="button" onClick={toggleFormType}>
                                    Зарегистрироваться
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
