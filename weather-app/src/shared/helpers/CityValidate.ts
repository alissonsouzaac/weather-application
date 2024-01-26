export const validateCity = (cityName: string): boolean => {
    const validCityRegex = /^[A-Za-z\s]+$/;
    return validCityRegex.test(cityName);
  };