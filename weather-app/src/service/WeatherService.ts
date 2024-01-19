// WeatherService.ts
import axios, {AxiosError} from 'axios';
import { WeatherData, WeatherError } from '../types/weather';


const API_KEY = '0dad8b4d2a2d531754cf248697e88f5d'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city: string): Promise<WeatherData | WeatherError> => {
    console.log('chegou nome: ' + city);
  try {
    console.log('try');
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    const weatherError: WeatherError = {
        message: parseErrorMessage(error as AxiosError),
      };
    console.log('catch: ' + weatherError);
    return weatherError
    //throw error;
  }
};

const parseErrorMessage = (error: AxiosError): string => {
    console.log(error);
    if (error.response && error.response.data) {
      // Se o erro foi recebido da API com uma mensagem específica, usamos essa mensagem
      return `Enter a valid city name`;
    } else if (error.message) {
      // Caso contrário, usamos a mensagem de erro do próprio Axios
      return `Request failed: ${error.message}`;
    } else {
      // Se não houver nenhuma mensagem disponível, usamos uma mensagem genérica
      return 'Unknown error occurred';
    }
  };
