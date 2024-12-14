import { Injectable } from '@angular/core';
import {RestService} from "../rest/rest.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private restService: RestService) {}

  getReservations() {
    this.restService.get("reservations")
  }

  getReservationDetails(id: number) {
    this.restService.get("reservations/" + id)
  }

  deleteReservation(id: number) {
    this.restService.delete(`reservations/${id}`)
  }
}
