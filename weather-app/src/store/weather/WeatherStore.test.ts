import { act } from 'react-dom/test-utils';
import WeatherStore from './WeatherStore';


describe('WeatherStore Tests', () => {
  test('should update weather description', () => {
    const newDescription = 'Sunny day';
  
    act(() => {
      WeatherStore.setWeatherDescription(newDescription);
    });
  
    expect(WeatherStore.weatherDescription).toBe(newDescription);
  });
  
  test('should clear weather description', () => {
    WeatherStore.setWeatherDescription('Cloudy day');
  
    act(() => {
      WeatherStore.clearWeatherDescription();
    });
  
    expect(WeatherStore.weatherDescription).toBe('');
  });
})
