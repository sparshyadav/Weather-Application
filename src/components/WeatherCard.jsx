
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherCard.css';
import clear from '../assets/clear.png';
import clouds from '../assets/clouds.png';
import drizzle from '../assets/drizzle.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';
import mist from '../assets/mist.png';
import humidity from '../assets/humidity.png';

const WeatherCard = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weatherType, setWeatherType] = useState("../assets/default.png"); // Default image
    const apiKey = "c0dff8a115ca553b49eaf8805bf73f1d";

    const weatherConditionsMap = [
        { "name": "clear", "img": clear },
        { "name": "clouds", "img": clouds },
        { "name": "drizzle", "img": drizzle },
        { "name": "humidity", "img": humidity },
        { "name": "rain", "img": rain },
        { "name": "snow", "img": snow },
        { "name": "mist", "img": mist },
        { "name": "wind", "img": wind },
        { "name": "haze", "img": clear },
        { "name": "storm", "img": rain },
    ];

    const fetchWeatherData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            const data = response.data;
            const tempCelsius = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
            setWeatherData({
                city: data.name,
                temp: tempCelsius,
                feels_like: (data.main.feels_like - 273.15).toFixed(2),
                condition: data.weather[0].description,
                windSpeed: data.wind.speed
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData();
        const interval = setInterval(fetchWeatherData, 30 * 60 * 1000); // Update every 30 minutes
        return () => clearInterval(interval);
    }, [city]);

    useEffect(() => {
        if (weatherData) {
            const conditionLower = weatherData.condition.toLowerCase();
            weatherConditionsMap.forEach(element => {
                if (conditionLower.includes(element.name)) {
                    setWeatherType(element.img);
                }
            });
        }
    }, [weatherData]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="weather-card">
            <div className="left">
                <img src={weatherType} className="weather-icon" alt="No Weather Icon" />
                <div className="text">
                    <h2>{city}</h2>
                    {/* <p>{weatherData.condition}</p> */}
                </div>
            </div>
            <div className="right">
                <div className="smallContainer">
                    <h3 >Temperature: {weatherData.temp} °C</h3>
                </div>

                <div className="smallContainer">
                    <h3 >Feels Like: {weatherData.feels_like} °C</h3>
                </div>

                <div className="smallContainer">
                    <h3 >Wind Speed: {weatherData.windSpeed} m/s</h3>
                </div>

            </div>
        </div>
    );
};

export default WeatherCard;
