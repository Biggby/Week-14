// src/App.js
import React, { useState } from 'react';
import FoodList from './components/FoodList';
import Navigation from './components/Navigation';
import './App.css';

function App() {
    const [menuItems, setMenuItems] = useState([]);

    const fetchMenuItems = async (query) => {
        try {
            const apiKey = 'ba3cb048738a4b9aa7d445b1661550cd';  // Replace with your Spoonacular API key
            const response = await fetch(`https://api.spoonacular.com/food/menuItems/search?query=${query}&number=2&apiKey=${apiKey}`);
            const data = await response.json();
            setMenuItems(data.menuItems || []);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };

    return (
        <div className="container">
            <Navigation onSearch={fetchMenuItems} />
            <FoodList items={menuItems} />
        </div>
    );
}

export default App;
