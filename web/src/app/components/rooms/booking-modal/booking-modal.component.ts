import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {RoomsService} from "../../../services/rooms/rooms.service";
import {MessageServiceService} from "../../../services/message-service/message-service.service";

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss'
})
export class BookingModalComponent implements OnInit {
  form: FormGroup;
  ref: any;
  totalPayment: number = 0;

  constructor(private dialog: DynamicDialogRef, public config: DynamicDialogConfig, private confirmationService: ConfirmationService, private fb: FormBuilder, private roomService: RoomsService, public messageService: MessageServiceService) {
  }

  ngOnInit() {
    this.ref = this.config.data;
    this.totalPayment = this.calculateTotalPayment(this.ref.dateFrom, this.ref.dateTo, this.ref.room.price);
    this.form = this.fb.group({
      reservation: new FormGroup({
        dateFrom: new FormControl(this.ref.dateFrom),
        dateTo: new FormControl(this.ref.dateTo),
      }),
      guest: new FormGroup({
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        sex: new FormControl('', Validators.required),
        birthday: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zipCode: new FormControl('', Validators.required)
      })
    })
  }

  getControl(formGroup: string, control: string)  {
    return this.form.controls[formGroup].get(control)
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
        this.closePopup();
      },
    });
  }

  private closePopup() {
    this.dialog.destroy();
  }

  calculateTotalPayment(dateFrom: Date, dateTo: Date, price: number) {
    let differenceDays = new Date(dateTo).getDate() - new Date(dateFrom).getDate();
    if (differenceDays >= 0) {
      return differenceDays * price;
    }
    else {
      return 0;
    }
  }

  submitForm(form: FormGroup) {
    form.markAllAsTouched()
    if (form.valid) {
      this.roomService.bookRoom(this.ref.room.id, form.value).subscribe(response => {
        this.messageService.showMessageSuccess("Pokój został zarezerowaony!");
        this.dialog.close();
     })
    }
  }


}
