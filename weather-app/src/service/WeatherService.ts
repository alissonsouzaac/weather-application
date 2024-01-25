// WeatherService.ts
import axios, {AxiosError, AxiosInstance} from 'axios';
import { WeatherData, WeatherError } from '../types/weather';
import { config } from '../config';
import weatherStore from '../store/weather/useWeatherStore';

const API_KEY = config.apiKeyWeather;
const BASE_URL = config.BaseUrlWeather;

export const getWeatherData = async (city: string, axiosInstance: AxiosInstance = axios): Promise<WeatherData | WeatherError> => {
    
  try {
    const response = await axiosInstance.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   
    weatherStore.setWeatherDescription(response.data.weather[0].description)
    return response.data;
  } catch (error) {
    const weatherError: WeatherError = {
        message: parseErrorMessage(error as AxiosError),
    };

    return weatherError
  }
};

const parseErrorMessage = (error: AxiosError): string => {
  
    if (error.response && error.response.data) {
      return `Enter a valid city name`;
    } else if (error.message) {
      return `Request failed: ${error.message}`;
    } else {
      return 'Unknown error occurred';
    }
  };
