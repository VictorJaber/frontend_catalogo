import React from "react";
import logo from '../assets/logotipo.png';
import user from "../assets/Group 1.png";
import './Reset.css'
import './Home.css'

function Header() {
    return (
        <div>
            <header>
                <div className="navBar">
                    <div className="left">
                        <span>Catálogo Digital</span>
                    </div>
                    <div className="center">
                        <img src={logo} className="logotipo" alt="Logo"/>
                    </div>
                    <div className="right">
                        <img src={user} alt="Usuário"/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
