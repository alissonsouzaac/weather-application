import React from 'react';
import './App.css';
import WeatherComponent from './components/WeatherComponent';

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: '#87CEEB' }}>
      <WeatherComponent />
    </div>
  );
};

export default App;
