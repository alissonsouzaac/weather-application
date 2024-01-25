import React from 'react';
import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import WeatherComponent from './WeatherComponent';
import { getWeatherData as mockGetWeatherData } from '../service/WeatherService';
import axios from "axios";


//jest.mock('../service/WeatherService');

const mockWeatherData = {
  name: 'London',
  main: { temp: 20, humidity: 60 },
  weather: [{ description: 'Clear' }],
  wind: { speed: 5 },
};

describe('WeatherComponent', () => {
  test('renders WeatherComponent correctly', async () => {
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
