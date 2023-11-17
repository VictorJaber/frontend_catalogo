import React from "react";
import logo from '../assets/logotipo.png';
import user from "../assets/Group 1.png";
import './Home.css'

function Header() {
    return (
        <div className={"divPai"}>
            <header>
                <div className="navBar">
                    <div className="left">
                        <span>Catálogo Digital</span>
                    </div>
                    <div className="center">
                        <a href={'/home'}><img src={logo} className="logotipo" alt="Logo"/></a>
                    </div>
                    <div className="right">
                        <a href={'profile'}> <img src={user} alt="Usuário"/></a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
