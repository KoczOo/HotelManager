import {Component, OnInit} from '@angular/core';
import {PageableDto} from "../../dto/pagination/pageable-dto";
import {ReservationsService} from "../../services/reservations/reservations.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent implements OnInit {
  page: number = 0;
  totalRecords: number = 0;
  pageable: PageableDto = new PageableDto(this.page, 10, null);
  rezerwacje: any[] = [];
  isLoading: boolean = true;

  constructor(public reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.reservationsService.getReservations().subscribe(response => {
      console.log(response);
      this.rezerwacje = response;
    })
  }

  showReservationsDetails(szczegółyRezerwacji: string, param2: { reservation: any }) {

  }

  protected readonly String = String;

  deleteReservation(reservationId: string) {

  }
}
