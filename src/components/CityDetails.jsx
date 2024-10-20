import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./CityDetails.css";
import Loader from './Loader';

const CityDetails = () => {
    const { city } = useParams();
    const [temperatureData, setTemperatureData] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = "c0dff8a115ca553b49eaf8805bf73f1d";

    const fetchTemperatureData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
            );

            const today = new Date();
            const currentDate = today.toISOString().split("T")[0];
            const currentTime = today.toTimeString().split(" ")[0];

            const filteredData = response.data.list
                .map(entry => ({
                    time: entry.dt_txt.split(" ")[1],
                    date: entry.dt_txt.split(" ")[0],
                    temp: (entry.main.temp - 273.15).toFixed(2),
                }))
                .filter(entry => entry.date === currentDate && entry.time <= currentTime);

            filteredData.sort((a, b) => b.time.localeCompare(a.time));

            setTemperatureData(prevData => [...prevData, ...filteredData]);
        } catch (error) {
            console.error("Error fetching temperature data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTemperatureData();

        const intervalId = setInterval(fetchTemperatureData, 30 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, [city]);

    if (loading) return <div><Loader /></div>;

    return (
        <div className="city-details">
            <h1>{city} Data</h1>
            <h2>Date: {temperatureData[0]?.date}</h2>

            <ul>
                {temperatureData.map((entry, index) => (
                    <li key={index}>
                        Time: {entry.time} <br />
                        Temperature: {entry.temp} °C
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CityDetails;
