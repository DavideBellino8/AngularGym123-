interface Equipment {
  id: number;
  name: string;
  claim: string;
  icon: string; // L'icona è rappresentata come una stringa SVG
  image: string; // URL
  pricePerMinute: number;
}

interface EquipmentBookingRequest {
  duration: number;
}

interface EquipmentBooking {
  machineName: string;
  id: number;
  equipment_id: number;
  user_id: string;
  start_date: string; // ISO 8601 format
  end_date: string; // ISO 8601 format
}
