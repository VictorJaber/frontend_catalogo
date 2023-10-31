import React from "react";
import logo from '../assets/logotipo.png';
import user from "../assets/Group 1.png";
import ford from "../assets/ford.png"
import honda from "../assets/honda.png"
import chery from "../assets/chery.png"
import hyundai from "../assets/hyundai.png"
import caoa from "../assets/caoa.png"
import renault from "../assets/renault.png"
import gwm from "../assets/gwm.png"
import volks from "../assets/volkswagen.png"
import {Link} from "react-router-dom";
import './Reset.css'
import './Home.css'
import Header from "./Header";

function Home() {
    return (
        <div>
            <Header/>
            <div>
                <div className={"headline"}>
                    <h1>MARCAS DISPONÍVEIS</h1>
                </div>
                <div className={"brand"}>
                    <Link to="/ford">
                        <img src={ford} alt="Ford" />
                    </Link>
                    <img src={honda}/>
                    <img src={hyundai}/>
                    <img src={caoa}/>
                </div>
                <div className={"brand"}>
                    <img src={chery} />
                    <img src={gwm}/>
                    <img src={renault}/>
                    <img src={volks}/>
                </div>
            </div>


        </div>
    )
}

export default Home;
