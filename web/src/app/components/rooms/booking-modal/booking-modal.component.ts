import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss'
})
export class BookingModalComponent {
  form: FormGroup;

  constructor(private dialog: DynamicDialogRef, private confirmationService: ConfirmationService) {
  }

  confirmCancel(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Czy na pewno chcesz anulować wprowadzanie rezerwacji?",
      header: "Anuluj",
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.zamknijPopup();
      },
    });
  }

  private zamknijPopup() {
    this.dialog.destroy();
  }


  submitForm(form: FormGroup) {

  }
}
