import './Login.css'
import logo from '../assets/logotipo.png'
import React from "react";

function Login() {

    return (<div className="page">
            <form method="POST" className="formLogin">
                <img src={logo} className={"logotipo"} width={"230px"}/>
                <h1>Entrar</h1>
                <p>Digite os seus dados de acesso no campo abaixo.</p>
                <label htmlFor="email">E-mail</label>
                <input type="email" placeholder="Digite sua senha" autoFocus="true"/>
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Digite seu e-mail"/>
                <a href="/">Entrar em contato com o administrador</a>
                <input type="submit" value="Acessar" className="btn"/>
            </form>
        </div>)
}

export default Login