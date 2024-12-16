import {Injectable} from '@angular/core';
import {RestService} from "../rest/rest.service";

@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    constructor(private restService: RestService,) {
    }

    readRooms(dateFrom: Date | null, dateTo: Date | null) {
        const bookingData = {dateFrom: dateFrom, dateTo: dateTo};
        return this.restService.post("api/room", bookingData);
    }

    bookRoom(roomId: string, reservation: any) {
        return this.restService.post(`api/room/reservations/${roomId}`, reservation);
    }
}
