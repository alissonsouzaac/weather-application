import { WeatherError } from '../types/weather';
import { getWeatherData } from './WeatherService';

describe('WeatherService', () => {
  test('should fetch weather data for a valid city', async () => {
    const city = 'London';

    const result = await getWeatherData(city);

    if ('name' in result) {
      expect(result).toBeDefined();
      expect(result.name).toBe(city);
    } else {
      throw new Error('Unexpected result type');
    }
  });

  test('should return an error for an invalid city', async () => {
    const invalidCity = 'InvalidCity123'; // Uma cidade que provavelmente não existe

    const result = await getWeatherData(invalidCity);

    expect((result as WeatherError).message).toContain('valid city name');
  });
});
