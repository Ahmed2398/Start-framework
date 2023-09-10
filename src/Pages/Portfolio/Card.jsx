import React from 'react';
import "./Portfolio.css";
const Card = ({picture, openModal}) => {
    return (
            <div className="card">
                <picture>
                    <img src={picture} alt="card1" />
                </picture>
                <div className="layer">
                    <i onClick={openModal} className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
            </div>
    );
};

export default Card;
