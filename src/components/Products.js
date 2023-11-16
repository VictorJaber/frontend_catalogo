import React, {useState, useEffect} from 'react';
import Header from './Header';
import FilterModal from './FilterModal';
import './Products.css';
import lupa from '../assets/lupa.svg';
import filter from '../assets/filter-solid.svg';
import {Link} from "react-router-dom";
import ford from "../assets/ford.png";
import honda from "../assets/honda.png";
import hyundai from "../assets/hyundai.png";
import caoa from "../assets/caoa.png";
import chery from "../assets/chery.png";
import gwm from "../assets/gwm.png";
import renault from "../assets/renault.png";
import volks from "../assets/volkswagen.png";


function Products() {
    const [post, setPost] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3333/post', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Erro na resposta da API');
                }

                const result = await response.json();

                // Certifique-se de que 'data' existe na resposta antes de tentar acessá-lo
                const postData = result.data || [];

                setPost(postData);
            } catch (error) {
                console.error('Erro ao buscar posts:', error.message);
                setError('Erro ao buscar posts: ' + error.message);
            }
        };
        fetchPost();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const applyFilters = () => {
        // Lógica para aplicar os filtros aqui
    };

    return (
        <div>
            <Header/>
            <div className="productLabel">
                <div className="brandProduct">
                    <h1>Nome da Marca</h1>
                </div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Busque aqui seu produto"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <img src={lupa} alt="Ícone de Lupa" className="search-icon" onClick={handleSearchChange}/>
                </div>
                <div>
                    <img src={filter} alt="Ícone de Filtro" className="filter-icon" onClick={openModal}/>
                </div>
            </div>
            {isModalOpen && <FilterModal onClose={closeModal} onApplyFilters={applyFilters}/>}
            <div className="error-message">{error}</div>
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

    );
}

export default Products;
