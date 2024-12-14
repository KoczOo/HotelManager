import { Injectable } from '@angular/core';
import {RestService} from "../rest/rest.service";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private restService: RestService,) { }

  readRooms() {
    return this.restService.get("api/room");
  }

  bookRoom(roomId: string, reservation: any) {
    return this.restService.post(`api/room/reservations/${roomId}`, reservation);
  }
}
