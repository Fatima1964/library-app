// src/WeatherWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = ({ apiKey, latitude, longitude }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=${apiKey}`
        );

        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [apiKey, latitude, longitude]);

  return (
    <div>
      <h2>Weather Widget</h2>
      {weather ? (
        <div>
          <p>{`Temperature: ${weather.temperature.value} ${weather.temperature.units}`}</p>
          <p>{`Weather: ${weather.weather.description}`}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
