import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';

function Home({ cities }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedCity, setSearchedCity] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchedCity(searchTerm.trim());
        setSearchTerm('');
    };

    return (
        <div className="main">
            <h1>Weather Monitoring</h1>

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className="weather-container">
                {searchedCity && (
                    <WeatherCard city={searchedCity} />
                )}

                {cities.map((city) => (
                    <Link key={city} to={`/city/${city}`}>
                        <WeatherCard city={city} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
