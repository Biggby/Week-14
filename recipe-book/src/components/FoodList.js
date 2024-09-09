import React from 'react';
import ItemCard from './ItemCard';
import '../App.css';

function FoodList({ items }) {
    return (
        <div className="item-list">
            {items.map((item) => (
                <ItemCard 
                    key={item.id} 
                    title={item.title} 
                    restaurant={item.restaurantChain} 
                    image={item.image} 
                />
            ))}
        </div>
    );
}

export default FoodList;
