import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/Login.css';
import logo from '../assets/logotipo.png';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Estado para armazenar a mensagem de erro

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:3333/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                navigate("/home");
            } else {
                // Credenciais inválidas, definir a mensagem de erro
                setErrorMessage("Credenciais inválidas, por favor tente novamente.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="page">
            <form className="formLogin" onSubmit={handleLogin}>
                <img src={logo} className={"logotipo"} width={"230px"} alt="Logo" />
                <h1>Entrar</h1>
                <p>Digite os seus dados de acesso no campo abaixo.</p>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    autoFocus={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Exibir a mensagem de erro, se houver */}
                <a href={'#'}>Entrar em contato com o administrador</a>
                <input type="submit" value="Acessar" className="btn" />
            </form>
        </div>
    );
}

export default Login;
