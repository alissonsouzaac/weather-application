import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=0dad8b4d2a2d531754cf248697e88f5d&units=metric',
});

export default api;
