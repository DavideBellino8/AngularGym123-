import { Component, computed, inject, input, signal } from '@angular/core';
import { Equipments } from '../equipments';

@Component({
  selector: 'app-dettaglio',
  imports: [],
  templateUrl: './dettaglio.html',
  styleUrl: './dettaglio.css',
})
export class Dettaglio {
  id = input.required<string>();
  equipmentService = inject(Equipments);

  ngOnInit() {
    this.equipmentService.loadEquipment();
  }

  equipments = this.equipmentService.fetchedEquipment;

  equipment = computed(() =>
    this.equipmentService
      .fetchedEquipment()
      .find((eq) => eq.id.toString() === this.id())
  );




}
