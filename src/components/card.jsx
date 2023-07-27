// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ title, content, image }) => {
    return (
        <div className="card">
                <img src={image} alt={title} className="car-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
    );    
};

export default Card