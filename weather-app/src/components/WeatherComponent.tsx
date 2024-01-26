import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Typography, Alert } from '@mui/material';
import { getWeatherData } from '../service/WeatherService';
import { WaetherGroupButtons, WeatherContainer } from './styles';
import WeatherDisplay from './WeatherDisplay';
import weatherStore from '../store/weather/useWeatherStore';
import { WeatherData } from '../types/weather';
import AlertComponent from './ErrorComponent';
import { validateCity } from '../shared/helpers/CityValidate';


const WeatherComponent: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [severity, setSeverity] = useState<'error' | 'warning'>('warning');
  const [temperatureUnit, setTemperatureUnit] = useState<string>('Celsius');

  const handleSearch = async () => {
    const validate = validateCity(city);
    setLoading(true);
    setError(null);
    setWeatherData(null);

    if (!city || !validate) {
      setError(validate ? 'Enter the name of a city' : 'Name of a city Name is invalid');
      setSeverity('warning')
      setLoading(false);
      return;
    }

    try {
      const data = await getWeatherData(city);

      if ('message' in data) {
        setError(data.message);
        setSeverity(data.severity);
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
    setWeatherData(null);
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
    setError('');
    if (!city ) {
      setError('Search for a city name first');
      return;
    }
    setTemperatureUnit((prevUnit) => (prevUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
  };

  const convertTemperature = (temp: number) => {
    return temperatureUnit === 'Fahrenheit' ? (temp * 9) / 5 + 32 : temp;
  };

  return (
    <>
      {weatherData && !error && (
        <WeatherDisplay />
      )}
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
          <Button style={{marginRight: '5px'}} variant="contained" color="primary" onClick={handleSearch}>
              Search
          </Button>
          <Button style={{marginRight: '5px'}} variant="contained" color="primary" onClick={toggleTemperatureUnit}>
              Toggle Temperature
          </Button>
          <Button style={{marginRight: '5px'}} variant="contained" color="primary" onClick={handleClear}>
              Clear
          </Button>
        </WaetherGroupButtons>  

        {loading && <CircularProgress style={{ marginTop: '20px' }} />}
        {error && (
          <AlertComponent text={error} severity={severity} />
        )}

        {weatherData && !error && (
          <div style={{ marginTop: '20px' }}>
            <Typography variant="h5">{weatherData.name}</Typography>
            <Typography variant="body1">
              Temperature: {convertTemperature(weatherData.main.temp)}°{temperatureUnit}
            </Typography>
            <Typography variant="body1">Weather Description: {weatherData.weather.description}</Typography>
            <Typography variant="body1">Humidity: {weatherData.main.humidity}%</Typography>
            <Typography variant="body1">Wind Speed: {weatherData.wind.speed} m/s</Typography>
          </div>
        )}
      </WeatherContainer>
    </>
  );
};

export default WeatherComponent;
