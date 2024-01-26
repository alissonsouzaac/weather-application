import { render } from '@testing-library/react';
import WeatherDisplay from './WeatherDisplay';

describe('WeatherDisplayComponent Tests', () => {
  test('should render WeatherDisplay with correct icon', () => {
    const { getByAltText } = render(<WeatherDisplay />);
  
    const weatherIcon = getByAltText('Weather Icon');
  
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherIcon).toHaveAttribute('src', '/static/images/sun.svg');
  });
})
