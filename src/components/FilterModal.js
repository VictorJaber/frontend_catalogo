import React from 'react';
import './FilterModal.css'
function FilterModal(props) {
    return (
        <div className="filter-modal">
            <div className="modal-content">
                <span className="close" onClick={props.onClose}>&times;</span>
                <h2>Inserir Filtros</h2>
                <input type="text" placeholder="Ano do Carro" />
                <input type="text" placeholder="Tipo de Acessórios" />
                <button onClick={props.onApplyFilters} onClick={props.onClose}>Aplicar Filtros</button>
            </div>
        </div>
    );
}

export default FilterModal;
