import { useState, useEffect } from 'react';
import { fetchWeatherData } from './weatherData';
import { GetUserInput } from './userInput';
import '../Styles/weatherCard.css'

export default function App() {
  const [location, setLocation] = useState('Texas');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function getWeather() {
      setWeather(null);
      const data = await fetchWeatherData(location);
      if (data) {
        setWeather(data);
      }
    }

    getWeather();
  }, [location]);

  return (
    <>
      <GetUserInput onSubmit={setLocation}/>
      {weather ? (
        <div className="weatherCard">
          <h1 className='title'>{weather.resolvedAddress}</h1>
          <h2>Latitude: {weather.latitude.toFixed(4)}</h2>
          <h2>Longitude: {weather.longitude.toFixed(4)}</h2>
          <h2>Weather Condition: {weather.currentConditions.conditions}</h2>
          <h2>Humidity: {weather.currentConditions.humidity}%</h2>
          <h2>Temperature: {weather.currentConditions.temp}℉</h2>
          <h2>Feels like: {weather.currentConditions.feelslike}℉</h2>
          <h2>UV index: {weather.currentConditions.uvindex}</h2>
        </div>
      ) : (
        <div className="loadingCard">
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}
