import {Component, OnInit} from '@angular/core';
import {PageableDto} from "../../dto/pagination/pageable-dto";
import {ReservationsService} from "../../services/reservations/reservations.service";
import {ConfirmationService} from "primeng/api";
import {MessageServiceService} from "../../services/message-service/message-service.service";
import {BookingModalComponent} from "../rooms/booking-modal/booking-modal.component";
import {DialogService} from "primeng/dynamicdialog";
import {ReservationDetailsComponent} from "./reservation-details/reservation-details.component";

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

  constructor(public reservationsService: ReservationsService, private confirmationService: ConfirmationService,public messageService: MessageServiceService, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.reservationsService.getReservations().subscribe(response => {
      this.rezerwacje = response;
    })
  }

  showReservationsDetails(header: string, data: any) {
    this.dialogService.open(ReservationDetailsComponent, {
      data: data,
      header: header,
      width: "80%",
      baseZIndex: 100,
      closable: false,
      focusOnShow: false,
    });
  }

  protected readonly String = String;

  deleteReservation(event: Event, reservationId: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Czy na pewno chcesz usunąć rezerwację?",
      header: "Usuń rezerwację",
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-outlined p-button-text",
      accept: () => {
        this.reservationsService.deleteReservation(reservationId).subscribe(response => {
          if(response === "OK"){
            this.messageService.showMessageSuccess("Rezerwacja została usunięta!")
            this.reservationsService.getReservations().subscribe(response => {
              this.rezerwacje = response;
            })
          }
        });
      },
    });
  }
}
