import React, {useState} from 'react';
import Header from "./Header";
import './Products.css';

function Products(props) {
    const brands = ["CAOA", "Chery", "Ford", "GWM", "Honda", "Hyundai", "Renault", "Volkswagen"];
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <Header/>
            <div className={"productLabel"}>
                <div className="brandProduct">
                    <h1>{brands[2]}</h1>
                </div>
                <div className={"search"}>
                    <input
                           type="text"
                           placeholder="Busque aqui seu produto"
                           value={searchTerm}
                           onChange={handleSearchChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Products;
