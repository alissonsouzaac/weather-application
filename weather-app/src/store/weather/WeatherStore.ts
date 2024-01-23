import { makeObservable, observable, action } from 'mobx';

class WeatherStore {
  weatherDescription = '';

  constructor() {
    makeObservable(this, {
      weatherDescription: observable,
      setWeatherDescription: action,
    });
  }

  setWeatherDescription(description: string) {
    this.weatherDescription = description;
  }

  clearWeatherDescription() {
    this.weatherDescription = '';
  }
}

const weatherStore = new WeatherStore();
export default weatherStore;