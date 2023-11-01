import React, { useState } from 'react';
import Header from './Header';
import FilterModal from './FilterModal'; // Importe o componente FilterModal
import './Products.css'
import lupa from '../assets/lupa.svg'
import filter from '../assets/filter-solid.svg'

function Products(props) {
    const brands = ["CAOA", "Chery", "Ford", "GWM", "Honda", "Hyundai", "Renault", "Volkswagen"];
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal

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
        // Você pode acessar os valores dos campos de filtro, como ano e tipo de acessórios, aqui
    };

    return (
        <div>
            <Header />
            <div className="productLabel">
                <div className="brandProduct">
                    <h1>{brands[2]}</h1>
                </div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Busque aqui seu produto"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <img src={lupa} alt="Ícone de Lupa" className="search-icon" onClick={handleSearchChange} />
                </div>
                <div>
                    <img src={filter} alt="Ícone de Filtro" className="filter-icon" onClick={openModal} />
                </div>
            </div>
            {isModalOpen && (
                <FilterModal onClose={closeModal} onApplyFilters={applyFilters} />
            )}
        </div>
    );
}

export default Products;
