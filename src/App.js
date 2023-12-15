import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambiado de Switch a Routes
import Navbar from './components/Navbar';
import CursosList from './components/CursosList';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes> {/* Cambiado de Switch a Routes */}
                    <Route path="/semestres/:semestreId" element={<CursosList />} /> {/* Cambiado de component a element */}
                </Routes> {/* Cambiado de Switch a Routes */}
            </div>
        </Router>
    );
};

export default App;
