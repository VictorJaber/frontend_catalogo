import React, { useState } from 'react';
import './User.css';
import Header from './Header';

function User() {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        funcao: '',
        loja: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <Header />
            <div className={'container'}>
                <h1 className={'headline'}>Meu Perfil</h1>
                <form>
                    <div >
                        <label htmlFor="nome">Nome:</label>
                    </div>
                    <div className={'campo'} >
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="sobrenome">Sobrenome:</label>
                    </div>
                    <div className={'campo'}>
                        <input
                            type="text"
                            id="sobrenome"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="funcao">Função:</label>
                    </div>
                    <div className={'campo'}>
                        <input
                            type="text"
                            id="funcao"
                            name="funcao"
                            value={formData.funcao}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="loja">Loja:</label>
                    </div>
                    <div className={'campo'}>
                        <input
                            type="text"
                            id="loja"
                            name="loja"
                            value={formData.loja}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default User;
