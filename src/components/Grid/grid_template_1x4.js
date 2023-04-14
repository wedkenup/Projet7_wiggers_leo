import React from 'react';
import './grid_template_1x4.css';

const grid_template = () => {
    // const [Clicked, SetClicked] = useState(0);
    const handle_click = () => {


    }
    return (
        <section className="grid-1x4">
            <div >
                <button className="titre_deroulant" onClick={handle_click}><h3>Fiabilité</h3><i className="fa-solid fa-chevron-down"></i></button>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
            <div >
                <button className="titre_deroulant" onClick={handle_click}><h3>Respect</h3><i className="fa-solid fa-chevron-down"></i></button>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <div>
                <button className="titre_deroulant" onClick={handle_click}><h3>Service</h3><i className="fa-solid fa-chevron-down"></i></button>
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <div >
                <button className="titre_deroulant" onClick={handle_click}><h3>Sécurité</h3><i className="fa-solid fa-chevron-down"></i></button>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </section >
    );
};

export default grid_template;