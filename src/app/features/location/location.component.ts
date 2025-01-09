import { Component, inject, input, OnChanges, OnInit } from '@angular/core';
import {
  ForecastWeatherResponse,
  FutureWeatherResponse,
} from '../../models/weather-responce.models';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { HolyHourPipe } from '../../pipes/holy-hour.pipe';

@Component({
  selector: 'app-location',
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent implements OnChanges {
  location_name = input.required<string>();
  apiService = inject(ApiService);
  locationWeatherData: ForecastWeatherResponse | null = null;

  selectedDayIndex = 0;
  currentHourPage = 0;
  hoursPerPage = 3;

  async ngOnChanges(): Promise<void> {
    const data = await this.apiService.getForecastWeather(this.location_name());

    this.locationWeatherData = data;
    console.log(data);
  }

  get forecastDays() {
    return this.locationWeatherData?.forecast?.forecastday || [];
  }

  get selectedDay() {
    return this.forecastDays[this.selectedDayIndex];
  }

  get totalHourPages() {
    return Math.ceil((this.selectedDay?.hour?.length || 0) / this.hoursPerPage);
  }

  prevDay() {
    if (this.selectedDayIndex > 0) {
      this.selectedDayIndex--;
      this.currentHourPage = 0; // Reset hour pagination when day changes
    }
  }

  nextDay() {
    if (this.selectedDayIndex < this.forecastDays.length - 1) {
      this.selectedDayIndex++;
      this.currentHourPage = 0; // Reset hour pagination when day changes
    }
  }

  getPaginatedHours(hours: any[]) {
    const start = this.currentHourPage * this.hoursPerPage;
    return hours.slice(start, start + this.hoursPerPage);
  }

  prevHourPage() {
    if (this.currentHourPage > 0) {
      this.currentHourPage--;
    }
  }

  nextHourPage() {
    if (this.currentHourPage < this.totalHourPages - 1) {
      this.currentHourPage++;
    }
  }
}
