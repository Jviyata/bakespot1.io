import React, { useState } from 'react';
import './App.css';

// Sample image data
const images = [
    { src: "/images/Cake1.jpg", category: "Cake" },
    { src: "/images/Cookie1.jpg", category: "Cookie" },
    { src: "/images/Pie1.jpg", category: "Pie" },
    { src: "/images/Treat1.jpg", category: "Treat" },
    { src: "/images/Cake2.jpg", category: "Cake" },
    { src: "/images/Cookie2.jpg", category: "Cookie" },
    { src: "/images/Pie2.jpg", category: "Pie" },
    { src: "/images/Treat2.jpg", category: "Treat" }
];

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/"><img src="/images/BAKESPOT.png" alt="BakeSpot Logo" /></a>
            </div>
            <ul className="nav-links">
                <li><a href="/explore"><img src="/images/exploreicon.png" alt="Explore Icon" /> Explore</a></li>
                <li><a href="/recipes"><img src="/images/recipesicon.png" alt="Recipes Icon" /> Recipes</a></li>
                <li><a href="/profiles"><img src="/images/profilesicon.png" alt="Profile Icon" /> Profile</a></li>
            </ul>
        </nav>
    );
};

const FilterBar = ({ onFilterChange }) => {
    return (
        <div className="filter-bar">
            <button className="filter-button active" onClick={() => onFilterChange('')}>All</button>
            <button className="filter-button" onClick={() => onFilterChange('Cake')}>Cake</button>
            <button className="filter-button" onClick={() => onFilterChange('Cookie')}>Cookie</button>
            <button className="filter-button" onClick={() => onFilterChange('Pie')}>Pie</button>
            <button className="filter-button" onClick={() => onFilterChange('Treat')}>International</button>
        </div>
    );
};

const PhotoGrid = ({ filteredImages }) => {
    return (
        <div className="container" id="photoGrid">
            {filteredImages.map((img, index) => (
                <div className="photo-item" key={index}>
                    <img src={img.src} alt={`Image ${index}`} />
                </div>
            ))}
        </div>
    );
};

const App = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredImages = filter 
        ? images.filter(img => img.category === filter)
        : images;

    return (
        <div>
            <Navbar />
            <FilterBar onFilterChange={handleFilterChange} />
            <PhotoGrid filteredImages={filteredImages} />
        </div>
    );
};

export default App;
