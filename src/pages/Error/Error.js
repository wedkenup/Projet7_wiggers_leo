import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

const Error = () => {
    return (
        <section className="Error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home" className="error_redirection">Retourner à la page d'accueil</Link>
        </section>
    );
};

export default Error;