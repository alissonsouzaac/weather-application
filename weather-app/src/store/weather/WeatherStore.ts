import { makeObservable, observable, action } from 'mobx';

class useWeatherStore {
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

const weatherStore = new useWeatherStore();
export default weatherStore;