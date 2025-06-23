import { Component, inject, input, output, signal } from '@angular/core';
import { Equipments } from '../equipments';

@Component({
  selector: 'app-booking-modal',
  imports: [],
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.css',
})
export class BookingModal {
  private equipmentService = inject(Equipments);
  equipment = input.required<Equipment>();

  private time = signal<number>(0);

  close = output();

  onCloseModal() {
    this.close.emit();
  }

  onSubmitTime(inputTime: number) {
    this.time.set(inputTime);
    console.log(this.time());
  }

  onSubmitPrenotation() {
    if (!this.time()) {
      return;
    }
    this.equipmentService.submitBooking(this.equipment().id, this.time());
    if (!this.equipmentService.error) {
      this.onCloseModal();
    }
  }
}
