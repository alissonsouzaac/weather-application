// WeatherDisplay.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; // Import act if not already imported
import WeatherDisplay from './WeatherDisplay';
import weatherStore from '../store/weather/useWeatherStore';

jest.mock('../store/weather/useWeatherStore', () => ({
    __esModule: true,
    default: {
      weatherDescription: 'sunny day',
    },
  }));

test('should render WeatherDisplay with correct icon', () => {
  // Arrange
  const { getByAltText } = render(<WeatherDisplay />);

  // Act
  const weatherIcon = getByAltText('Weather Icon');

  // Assert
  expect(weatherIcon).toBeInTheDocument();
  expect(weatherIcon).toHaveAttribute('src', '/static/images/sun.svg');
});
