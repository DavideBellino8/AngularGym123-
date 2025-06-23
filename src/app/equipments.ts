import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Equipments {
  constructor() {}

  private httpClient = inject(HttpClient);

  private corsi = signal<Equipment[]>([]);
  private sessionBooking = signal<EquipmentBooking[]>([]);

  public error: boolean = false;

  public fetchEquipment() {
    return this.httpClient.get<Equipment[]>(
      'https://d3660g9kardf5b.cloudfront.net/api/equipment'
    );
  }

  loadEquipment() {
    this.fetchEquipment().subscribe({
      next: (data) => {
        this.corsi.set(data);
      },
    });
  }
  fetchedEquipment = this.corsi.asReadonly();

  public fetchSession() {
    return this.httpClient.get<EquipmentBooking[]>(
      'https://d3660g9kardf5b.cloudfront.net/api/equipment-bookings'
    );
  }

  loadSession() {
    this.fetchSession().subscribe({
      next: (data) => {
        this.sessionBooking.set(data);
      },
    });
  }
  fetchedSession = this.sessionBooking.asReadonly();


  public submitBooking(id: number, duration: number) {
    return this.httpClient
      .post<string>(
        `https://d3660g9kardf5b.cloudfront.net/api/equipment/${id}/book`,
        { duration: duration },
        { responseType: 'text' as 'json' }
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res === 'Equipment booked') {
            this.error = false;
          } else {
            this.error = true;
          }
        },
      });
  }
}
