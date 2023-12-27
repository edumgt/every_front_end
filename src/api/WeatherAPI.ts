import HttpRequest from './HttpRequest';
import { GetAllWeatherResponse, GetPerTimeWeatherResponse, GetWeeklyWeatherResponse } from './type';

export const WeatherAPI = {
  getAllWeather: async (): Promise<GetAllWeatherResponse> => {
    const { data } = await HttpRequest.get(`v1/weather/all`);
    return data;
  },

  getPerTimeWeather: async (lat: number, long: number): Promise<GetPerTimeWeatherResponse> => {
    const { data } = await HttpRequest.get(`v1/weather/time?lat=${lat}&long=${long}`);
    return data;
  },

  getWeeklyWeather: async (lat: number, long: number): Promise<GetWeeklyWeatherResponse> => {
    const { data } = await HttpRequest.get(`v1/weather/week?lat=${lat}&long=${long}`);
    return data;
  },
};
