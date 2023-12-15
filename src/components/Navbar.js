import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [semestres, setSemestres] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/semestres/get')
            .then(response => {
                console.log('Semestres response:', response.data);
                setSemestres(response.data || []);
            })
            .catch(error => console.error('Error fetching semestres', error));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">Diseño y Desarrollo de Software</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {semestres.map(semestre => (
                            <li key={semestre.id_semestre} className="nav-item">
                                <Link to={`/semestres/${semestre.id_semestre}`} className="nav-link">{semestre.nombre}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

