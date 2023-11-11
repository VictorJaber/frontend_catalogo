import React, {useState, useEffect} from 'react';
import Header from './Header';
import FilterModal from './FilterModal';
import './Products.css';
import lupa from '../assets/lupa.svg';
import filter from '../assets/filter-solid.svg';

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
            <div className="productList">
                <h2>Lista de Produtos</h2>
                <ul>
                    {Array.isArray(post) && post.map((item) => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <img src={item.photo} alt={`Foto de ${item.title}`}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default Products;
