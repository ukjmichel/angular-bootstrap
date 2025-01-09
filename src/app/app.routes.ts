import { Routes } from '@angular/router';
import { LocationComponent } from './features/location/location.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'location/:location_name',
    component: LocationComponent, // Route with parameter
  },
];
