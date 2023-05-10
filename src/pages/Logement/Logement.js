import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './logement.css';
import '@/assets/data/logements.json';
import LogementService from "@/_services/logement.service.js";
import Slideshow from "@/components/Slideshow/Slideshow.js";
import Dropdown from "@/components/Dropdown/dropdown.js";
import Rating from "@/components/Rating/Rating.js";

const Logement = () => {
    const { id } = useParams()

    let navigate = useNavigate();

    const data = LogementService.GetOneinfologement(id)

    useEffect(() => {
        if (!data) {
            navigate("/error")
        }
    }, []);


    const tagappear = (tags) => {
        return (
            tags.map((tag, index) => {
                return (
                    <li key={index}>{tag}</li>
                )
            })
        )
    }
    const equipmentShow = (equipments) => {
        return (
            equipments.map((equipment, index) => {
                return (
                    <li key={index}>{equipment}</li>
                )
            })
        )
    }

    return (
        <section className="Logement">
            {data && (
                <>
                    <Slideshow slideimg={data.pictures} />
                    <article className="all_slide_infos">
                        <div className="title_and_location">
                            <h1>{data.title}</h1>
                            <p>{data.location}</p>
                            <ul className="tags_container">
                                {tagappear(data.tags)}
                            </ul>
                        </div>
                        <div className="user_rate_container">
                            <div className="hoster">
                                <p>{data.host.name}</p>
                                <div className="pp_container">
                                    <img className="pp" alt="profil" src={data.host.picture} />
                                </div>
                            </div>
                            <div className="rating">
                                <Rating rating={data.rating} />
                            </div>
                        </div>
                    </article>
                    <div className="dropdown_logement">
                        <Dropdown className="dropdown_logement" title="Description" description={data.description} />
                        <Dropdown className="dropdown_logement" title="Equipements" description={equipmentShow(data.equipments)} />
                    </div>
                </>
            )
            }
        </section >
    );
};



export default Logement;