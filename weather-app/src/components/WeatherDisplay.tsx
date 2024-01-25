import React from 'react';
import weatherStore from '../store/weather/useWeatherStore';


const WeatherDisplay: React.FC = () => {

   const weatherCondition = weatherStore.weatherDescription;

   const getIconPath = (condition: string): string => {
    const iconMappings: { [key: string]: string } = {
      'sun': 'sun.svg',
      'cloud': 'mist.svg',
      'rain': 'rain.svg',
    };

    const iconName = Object.keys(iconMappings).find((key) =>
      condition.toLowerCase().includes(key)
    ) || 'sun'; 

    return `/static/images/${iconName}.svg`;
  };

  const iconPath = getIconPath(weatherCondition);

  return (
    <div className="weather-display">
      <img src={iconPath} alt="Weather Icon" style={{height: 50, width: 50}} />
    </div>
  );
};

export default WeatherDisplay;
