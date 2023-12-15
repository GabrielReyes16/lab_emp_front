import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";



const CursosList = () => {
    const [cursos, setCursos] = useState([]);
    const { semestreId } = useParams();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/cursos/get')
            .then(response => {
                // Filtrar cursos por el id del semestre
                const cursosFiltrados = response.data.filter(curso => curso.id_semestre === Number(semestreId));
                setCursos(cursosFiltrados);
            })
            .catch(error => console.error('Error fetching cursos', error));
    }, [semestreId]);

    return (
        <div>
            <h2>Cursos del Semestre</h2>
            <ul>
                {cursos.map(curso => (
                    <li key={curso.id}>{curso.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default CursosList;
