import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  CurrentWeatherResponse,
  ForecastWeatherResponse,
} from '../models/weather-responce.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://api.weatherapi.com/v1';
  apiKey = process.env['API_KEY'];

  http = inject(HttpClient);

  async getCurrentWeather(location: string): Promise<CurrentWeatherResponse> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${location}`;
    const data = await firstValueFrom(
      this.http.get<CurrentWeatherResponse>(url)
    );
    return data;
  }

  async getForecastWeather(location: string): Promise<ForecastWeatherResponse> {
    const days = 14;
    const url = `${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=${days}`;
    console.log(url);
    const data = await firstValueFrom(
      this.http.get<ForecastWeatherResponse>(url)
    );
    return data;
  }

  async getFutureWeather(location: string): Promise<ForecastWeatherResponse> {
    // Get today's date
    const today = new Date();

    // Add 14 days to today's date
    const futureDate = new Date(today.setDate(today.getDate() + 14));

    // Format the date as yyyy-MM-dd
    const formattedDate = futureDate.toISOString().split('T')[0];
    const url = `${this.apiUrl}/future.json?key=${this.apiKey}&q=${location}&dt=${formattedDate}`;
    console.log(url);

    // Fetch and return a single forecast data
    const data = await firstValueFrom(
      this.http.get<ForecastWeatherResponse>(url)
    );
    return data;
  }
}
