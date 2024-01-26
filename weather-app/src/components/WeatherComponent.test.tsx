import React from 'react';
import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import WeatherComponent from './WeatherComponent';
import { getWeatherData as mockGetWeatherData } from '../service/WeatherService';
import axios from "axios";
import * as WeatherService from '../service/WeatherService';

jest.mock('../service/WeatherService');

const mockWeatherData = {
  name: 'London',
  main: { temp: 25, humidity: 60 },
  weather: [{ description: 'Clear Sky' }],
  wind: { speed: 5 },
};

describe('WeatherComponent', () => {
  beforeEach(() => {
    // Limpa o mock antes de cada teste
    jest.clearAllMocks();
  });
  test('renders WeatherComponent correctly', async () => {
    (WeatherService.getWeatherData as jest.Mock).mockResolvedValueOnce(mockWeatherData);
    render(<WeatherComponent />);

    fireEvent.change(screen.getByLabelText('Enter city name'), { target: { value: 'London' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(WeatherService.getWeatherData).toHaveBeenCalledWith('London');
      expect(screen.getByText('London')).toBeInTheDocument();
      expect(screen.getByText('Temperature: 77°F')).toBeInTheDocument();
      expect(screen.getByText('Weather Description: Clear sky')).toBeInTheDocument();
      expect(screen.getByText('Humidity: 60%')).toBeInTheDocument();
      expect(screen.getByText('Wind Speed: 5 m/s')).toBeInTheDocument();
    });
   // render(<WeatherComponent />)
    // Mock a successful API response
    // mockGetWeatherData.mockResolvedValue(mockWeatherData);

    // render(<WeatherComponent />);

    // // Input city name
    // const cityInput = screen.getByLabelText('Enter city name');
    // fireEvent.change(cityInput, { target: { value: 'london' } });

    // // Click on the Search button
    // const searchButton = screen.getByText('Search');
    // fireEvent.click(searchButton);

    // // Wait for the API call to complete
    // await waitFor(() => {
    //   expect(mockGetWeatherData).toHaveBeenCalledWith('MockCity');
    // });

    // // Assertions
    // expect(screen.getByText('Weather App')).toBeInTheDocument();
    // expect(screen.getByText('MockCity')).toBeInTheDocument();
    // expect(screen.getByText('Temperature: 68°F')).toBeInTheDocument(); // Assuming default is Celsius
    // expect(screen.getByText('Weather Description: Clear')).toBeInTheDocument();
    // expect(screen.getByText('Humidity: 60%')).toBeInTheDocument();
    // expect(screen.getByText('Wind Speed: 5 m/s')).toBeInTheDocument();
  });

  // Add more test cases as needed for different scenarios
});
