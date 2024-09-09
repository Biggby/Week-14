import React, { useState } from 'react';
import '../App.css';

function Navigation({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className="navigation">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Dishes"
                />
                <button type="submit">Search</button>
                <h4>Results & Imaages may vary</h4>
            </form>
        </div>
    );
}

export default Navigation;
