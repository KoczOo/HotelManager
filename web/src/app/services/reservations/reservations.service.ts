import { Injectable } from '@angular/core';
import {RestService} from "../rest/rest.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private restService: RestService) {}

  getReservations() {
    return this.restService.get("api/reservations");
  }

  getReservationDetails(id: number) {
    this.restService.get("api/reservations/" + id)
  }

  deleteReservation(reservationId: string) {
    return  this.restService.delete(`api/reservations/${reservationId}`);
  }
}
