import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import { WeatherData, WeatherError } from '../types/weather';
import { getWeatherData } from './WeatherService';
import api from './api';

//jest.mock('axios');

//const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedAxios = axios as jest.Mocked<typeof axios>;

//const mockAxios = new MockAdapter(axios);

const mockWeatherData: WeatherData = {
  name: 'London',
    main: {
      temp: 30,
      humidity: 66
    },
    weather: {
      description: 'Sun',
    },
    wind: {
      speed: 7,
    }
}

const mockRequest = (response: WeatherData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: response,
      });
    }, 200);
  });
};


const mockRequestError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

describe('WeatherService', () => {

  afterEach(() => {
    //mockAxios.reset();
  });

  test('should fetch weather data for a valid city', async () => {
    const city = "London";
   // const result = await getWeatherData(city, axios as AxiosInstance);

 //   expect(result).toEqual(mockWeatherData);
   // axios.get = jest.fn().mockResolvedValue(mockWeatherData);
   //await mockedApi.get.mockImplementation(() => mockRequest(mockWeatherData))
     //const city = "London";
     //mock.onGet(/.*/).reply(200, mockWeatherData);
     //const result = await getWeatherData(city);
     //expect(result).toEqual(mockWeatherData);
    // (axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(() => mockRequisicao(mockWeather));

    //const result = await getWeatherData(city);
  /*  const city = 'London';

    const result = await getWeatherData(city);*/
  //  expect(result).toBe(mockWeather)
   // if ('name' in result) {
     // expect(result).toBeDefined();
     // expect(result.name).toBe(city);
   // } else {
   //   throw new Error('Unexpected result type');
   // }
  });

  test('should return an error for an invalid city', async () => {
     const invalidCity = 'InvalidCity123';

    // const result = await getWeatherData(invalidCity, axios as  AxiosInstance);

    // expect((result as WeatherError).message).toContain('valid city name');
  });
});
