import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Typography, Alert } from '@mui/material';
import { getWeatherData } from '../service/WeatherService';
import { WaetherGroupButtons, WeatherContainer } from './styles';
import { WeatherType } from '../types/weather';
import WeatherDisplay from './WeatherSimulationComponent';
import weatherStore from '../store/weather/WeatherStore';


const WeatherComponent: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<string>('Celsius');

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    if (!city) {
      setError('Enter the name of a city');
      setLoading(false);
      return;
    }

    try {
      const data = await getWeatherData(city);

      if ('message' in data) {
        setError(data.message);
      } else {
        setWeatherData(data);
      }
    } catch (error) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };
  
  const handleClear = () => {
    setWeatherData('');
    setCity('');
    setLoading(false);
    setError('');
    weatherStore.clearWeatherDescription();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
  };

  const convertTemperature = (temp: number) => {
    return temperatureUnit === 'Fahrenheit' ? (temp * 9) / 5 + 32 : temp;
  };

  return (
    <>
    <WeatherDisplay />
    <WeatherContainer className='Weather'>
      <Typography variant="h4" gutterBottom>
        Weather App
      </Typography>

      <TextField
        label="Enter city name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      <WaetherGroupButtons>
        <Button variant="contained" color="primary" className='ToggleButton' onClick={handleSearch}>
            Search
        </Button>
        <Button variant="contained" color="primary" onClick={toggleTemperatureUnit}>
            Toggle Temperature
        </Button>
        <Button variant="contained" color="primary" onClick={handleClear}>
            Clear
        </Button>
      </WaetherGroupButtons>  

      {loading && <CircularProgress style={{ marginTop: '20px' }} />}
      {error && (
        <Alert variant="filled" severity="warning" style={{ marginTop: '20px' }}>
          {error}
        </Alert>
      )}

      {weatherData && !error && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h5">{weatherData.name}</Typography>
          <Typography variant="body1">
            Temperature: {convertTemperature(weatherData.main.temp)}°{temperatureUnit}
          </Typography>
          <Typography variant="body1">Weather Description: {weatherData.weather[0].description}</Typography>
          <Typography variant="body1">Humidity: {weatherData.main.humidity}%</Typography>
          <Typography variant="body1">Wind Speed: {weatherData.wind.speed} m/s</Typography>
        </div>
      )}
    </WeatherContainer>
    </>
  );
};

export default WeatherComponent;
