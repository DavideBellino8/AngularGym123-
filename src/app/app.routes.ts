import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dettaglio } from './dettaglio/dettaglio';
import { Bookings } from './bookings/bookings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dettaglio/:id', component: Dettaglio },
  { path: 'bookings', component: Bookings },
];
