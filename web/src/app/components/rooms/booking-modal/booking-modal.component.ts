import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.scss'
})
export class BookingModalComponent implements OnInit {
  form: FormGroup;
  ref: any;
  totalPayment: number = 0;

  constructor(private dialog: DynamicDialogRef, public config: DynamicDialogConfig, private confirmationService: ConfirmationService, private fb: FormBuilder,) {
  }

  ngOnInit() {
    this.ref = this.config.data;
    this.totalPayment = this.calculateTotalPayment(this.ref.dateFrom, this.ref.dateTo, this.ref.room.price);
    this.form = this.fb.group({
      dateFrom: new FormControl({value: this.ref.dateFrom, disabled: true}),
      dateTo: new FormControl({value: this.ref.dateTo, disabled: true}),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
    })
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

  calculateTotalPayment(dateFrom: Date, dateTo: Date, price: number) {
    let differenceDays = new Date(dateTo).getDate() - new Date(dateFrom).getDate();
    return differenceDays * price;
  }

  submitForm(form: FormGroup) {
    form.markAllAsTouched()

  }
}
