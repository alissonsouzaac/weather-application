import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App /> );
  expect(screen.getByText('Weather App')).toBeInTheDocument();
  expect(screen.getByLabelText('Enter city name')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Toggle Temperature' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
});
