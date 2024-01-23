// WeatherService.test.ts
import { WeatherError } from '../types/weather';
import { getWeatherData } from './WeatherService';

describe('WeatherService', () => {
  test('should fetch weather data for a valid city', async () => {
    const city = 'London'; // Substitua pela cidade que você deseja testar

    const result = await getWeatherData(city);

    if ('name' in result) {
      // Se for WeatherData
      expect(result).toBeDefined();
      expect(result.name).toBe(city);
    } else {
      // Se for WeatherError
      throw new Error('Unexpected result type');
    }
  });

  test('should return an error for an invalid city', async () => {
    const invalidCity = 'InvalidCity123'; // Uma cidade que provavelmente não existe

    const result = await getWeatherData(invalidCity);

    // Verifique se o resultado é um erro
    expect((result as WeatherError).message).toContain('valid city name');
  });
});
