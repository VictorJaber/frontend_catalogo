import React from "react";
import { useNavigate } from "react-router-dom";
import '../components/Login.css'
import logo from '../assets/logotipo.png';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    }

    return (
        <div className="page">
            <form method="POST" className="formLogin" onSubmit={handleLogin}>
                <img src={logo} className={"logotipo"} width={"230px"} alt="Logo" />
                <h1>Entrar</h1>
                <p>Digite os seus dados de acesso no campo abaixo.</p>
                <label htmlFor="email">E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" autoFocus={true} />
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Digite sua senha" />
                <a href="/">Entrar em contato com o administrador</a>
                <input type="submit" value="Acessar" className="btn" />
            </form>
        </div>
    );
}
export default Login;
