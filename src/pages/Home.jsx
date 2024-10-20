import React from 'react';
import { Link } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';

function Home({ cities }) {
    return (
        <div className="main">
            <h1>Weather Monitoring</h1>
            <div className="weather-container">
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
