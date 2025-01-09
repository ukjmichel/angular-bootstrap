import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://api.weatherapi.com/v1';
  private apiKey = 'dedd80c23b78489e81f91534250901';

  http = inject(HttpClient);

  getCurrentWeather(location: string) {
    return this.http.get(
      `${this.apiUrl}/current.json?key=${this.apiKey}&q=${location}`
    );
  }
}
