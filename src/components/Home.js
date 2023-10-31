import React from "react";
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
                    <img src={honda} alt="Honda"/>
                    <img src={hyundai} alt="Hyundai"/>
                    <img src={caoa} alt="caoa"/>
                </div>
                <div className={"brand"}>
                    <img src={chery} alt="Chery" />
                    <img src={gwm} alt="gwm"/>
                    <img src={renault} alt="renault"/>
                    <img src={volks} alt="volks"/>
                </div>
            </div>


        </div>
    )
}

export default Home;
