import React, { useEffect } from 'react';
import weatherStore from '../store/weather/WeatherStore';


const WeatherDisplay: React.FC = () => {

   const weatherCondition = weatherStore.weatherDescription;

  const getIconPath = (condition: string): string => {
    // Mapeia as condições climáticas para os nomes dos arquivos de ícones
    const iconMappings: { [key: string]: string } = {
      'Clear': '/static/images/sun.svg',
      'Clouds': 'cloud.png', // Substitua 'cloud.png' pelo nome do seu ícone de nuvem
      'Rain': '/static/images/rain.svg', // Substitua 'rain.png' pelo nome do seu ícone de chuva
      // Adicione mais mapeamentos conforme necessário
    };

    // Obtém o nome do ícone com base na condição climática
    const iconName = iconMappings[condition] || 'sun.svg'; // Ícone padrão se não houver correspondência

    // Retorna o caminho completo do ícone
    return `/static/images/${iconName}`;
  };

  const iconPath = getIconPath(weatherCondition);
  useEffect(() => {
    console.log(iconPath)
    console.log(weatherCondition)
  }, [iconPath])
  return (
    <div className="weather-display">
      {/* Adicione mais lógica ou estilos conforme necessário */}
      <img src={iconPath} alt="Weather Icon" style={{height: 50, width: 50}} />
    </div>
  );
};

export default WeatherDisplay;
