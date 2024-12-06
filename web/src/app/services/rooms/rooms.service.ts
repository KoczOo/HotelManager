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
}
