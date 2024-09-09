import React from 'react';
import '../App.css';

function ItemCard({ title, restaurant, image }) {
    return (
        <div className="item-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{restaurant}</p>
        </div>
    );
}

export default ItemCard;
