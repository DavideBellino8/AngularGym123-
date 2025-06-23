import { Component, inject } from '@angular/core';
import { Equipments } from '../equipments';
import { BookingModal } from '../booking-modal/booking-modal';
import { RouterLink } from '@angular/router';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-home',
  imports: [BookingModal, RouterLink, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private equipmentService = inject(Equipments);

   isBooking = false;

  ngOnInit(): void {
    this.equipmentService.loadEquipment();
  }

  equipments = this.equipmentService.fetchedEquipment;

  onEquipmentBook() {
    this.isBooking = !this.isBooking;
  }
}
