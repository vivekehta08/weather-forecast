import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    setError('');

    try {
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSubmit = async (e) => {
    e.preventDefault();
    if (!location) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      const { lat, lon } = response.data.coord;
      fetchWeatherData(lat, lon);
    } catch (err) {
      setError('Location not found. Please try again.');
    }
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      }, () => {
        setError('Failed to retrieve your location.');
      });
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleLocationSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get Weather</button>
        <button type="button" onClick={handleUseMyLocation}>
          Use My Location
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.city.name}</h2>
          <div className="forecast">
            {weatherData.list.slice(0, 6).map((forecast, index) => (
              <div key={index} className="forecast-item">
                <p>{new Date(forecast.dt_txt).toLocaleDateString()}</p>
                <p>{forecast.main.temp}°C</p>
                <p>{forecast.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
