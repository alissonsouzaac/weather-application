export interface WeatherData {
    name: string,
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
  }
  
export interface WeatherError {
      message: string;
    }


export interface WeatherType {
    base: string;
    cod: number;
    dt: number;
    id: number;
    main: Main;
    name: string;
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: Wind;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}