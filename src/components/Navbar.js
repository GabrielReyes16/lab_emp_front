import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [semestres, setSemestres] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/semestres/get')
            .then(response => {
                console.log('Semestres response:', response.data);
                setSemestres(response.data || []); // Inicializar con un arreglo vacío si response.data es falsy
            })
            .catch(error => console.error('Error fetching semestres', error));
    }, []);


    return (
        <nav>
            <ul>
                {semestres.map(semestre => (
                    <li key={semestre.id_semestre}>
                        <Link to={`/semestres/${semestre.id_semestre}`}>{semestre.nombre}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;