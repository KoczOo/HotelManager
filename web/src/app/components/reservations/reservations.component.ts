import { Component } from '@angular/core';
import {PageableDto} from "../../dto/pagination/pageable-dto";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  page: number = 0;
  totalRecords: number = 0;
  pageable: PageableDto = new PageableDto(this.page, 10, null);
  rezerwacje: any[] = [];
  isLoading: boolean = true;

  showReservationsDetails(szczegółyRezerwacji: string, param2: { reservation: any }) {

  }
}
