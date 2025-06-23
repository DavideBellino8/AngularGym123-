import { Component, computed, inject } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Equipments } from '../equipments';

@Component({
  selector: 'app-bookings',
  imports: [Navbar],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings {
  private equipmentService = inject(Equipments);

  ngOnInit(): void {
    this.equipmentService.loadSession();
    this.equipmentService.loadEquipment();
  }

  bookingSessions = this.equipmentService.fetchedSession;

  sessions = computed(() => this.equipmentService.fetchedSession());
  equipments = computed(() => this.equipmentService.fetchedEquipment());

  machineName = computed(() =>
   this.sessions().map((ses) => {
      return {
        ...ses,
        machineName: this.equipments()
          .find((eq) => ses.equipment_id === eq.id)?.name,
      };
    })
  );
}
