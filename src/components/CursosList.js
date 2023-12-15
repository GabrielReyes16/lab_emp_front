import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap';

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
        <Container>
            <h2 className="text-center mt-3 mb-3">Lista de Cursos</h2>
            <Row xs={1} md={3} className="g-4">
                {cursos.map(curso => (
                    <Col key={curso.id_curso}>
                        <Card>
                            <CardHeader className="bg-dark text-white text-center font-weight-bold">
                                {curso.nombre}
                            </CardHeader>
                            <CardBody>
                                <p>{curso.descripcion}</p>
                            </CardBody>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CursosList;
