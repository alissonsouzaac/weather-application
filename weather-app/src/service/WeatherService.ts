import axios, {AxiosError, AxiosInstance} from 'axios';
import { WeatherData, WeatherError } from '../types/weather';
import weatherStore from '../store/weather/useWeatherStore';

const API_KEY =  process.env.REACT_APP_API_KEY_WEATHER;
const BASE_URL = process.env.REACT_APP_BASE_URL_WEATHER;

export const getWeatherData = async (city: string, axiosInstance: AxiosInstance = axios): Promise<WeatherData | WeatherError> => {
    
  try {

    const response = await axiosInstance.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    console.log(response);
    weatherStore.setWeatherDescription(response.data.weather[0].description)

    const response2 = await axiosInstance.get(`api.openweathermap.org/data/2.5/forecast?lat=-7.4706&lon=-34.8086&appid=${API_KEY}`);

   console.log(response2);

    return response.data;
  } catch (error) {
    const weatherError: WeatherError = {
        message: parseErrorMessage(error as AxiosError),
        severity: 'error'
    };

    return weatherError
  }
};

const parseErrorMessage = (error: AxiosError): string => {
  
    if (error.response && error.response.data) {
      return `Error in request, try again later`;
    } else {
      return 'Unknown error occurred';
    }

  };
