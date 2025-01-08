import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import moment from "moment/moment";
import { jsPDF } from "jspdf";

@Component({
    selector: 'app-reservation-details',
    templateUrl: './reservation-details.component.html',
    styleUrl: './reservation-details.component.scss'
})
export class ReservationDetailsComponent implements OnInit {
    ref: any;

    constructor(private dialog: DynamicDialogRef, public config: DynamicDialogConfig) {
    }

    ngOnInit() {
        this.ref = this.config.data;
        console.log(this.ref)
    }

    confirmCancel($event: MouseEvent) {
        this.dialog.destroy();
    }

    calculateDateDiff(dateFrom: Date, dateTo: Date) {
        const startMoment = moment(dateFrom);
        const endMoment = moment(dateTo);
        return endMoment.diff(startMoment, 'days');
    }

    printConfirmationToPdf() {
        let base64QrCode =  document.getElementById("qrCode")?.getElementsByTagName('canvas')[0];
        let base64Logo = document.createElement('img');
        base64Logo.src = "assets/logo-no-background.png";
        console.log(base64QrCode)
        const doc = new jsPDF({
            format: 'a4',
            orientation: 'portrait',

        });
        const res = this.ref.reservation
        doc.addFont('HMKMMAG.TTF', 'MagicR', 'normal', 'Identity-H');
        doc.addFont('HMKMMAG.TTF', 'MagicI', 'italic', 'Identity-H');
        doc.addImage(base64Logo, 10, 20, 120 ,30);
        doc.setFont('MagicR');
        doc.setCharSpace(0);
        doc.setFontSize(10);
        doc.text("Numer rezerwacji: " + res.id, 10, 10);
        doc.setFontSize(16);
        doc.setDrawColor(76, 175, 80);
        doc.line(10, 72, 200, 72);
        doc.text("Szczegoly rezerwacji: ", 10, 70);
        doc.setFontSize(12);
        doc.text("Data zameldowania: " + moment(res.dateFrom).format("DD.MM.yyyy"), 10, 80);
        doc.text("Data wymeldowania: " + moment(res.dateTo).format("DD.MM.yyyy"), 100, 80);
        doc.text("Numer pokoju: " + res.room.number, 10, 90);
        doc.text("Pietro: " + res.room.floor, 75, 90);
        doc.text("Liczba gosci: " + res.room.capacity, 125, 90);
        doc.setFontSize(16);
        doc.setDrawColor(76, 175, 80);
        doc.line(10, 112, 200, 112);
        doc.text("Dane osobowe: ", 10, 110);
        doc.setFontSize(12);
        doc.text("Imie: " + res.guest.name, 10, 120);
        doc.text("Nazwisko: " + res.guest.surname, 90, 120);
        doc.text("Data urodzenia: " + moment(res.guest.birthday).format("DD.MM.yyyy"), 10, 130);
        doc.text("Plec: " + res.guest.sex, 90, 130);
        doc.text("Kod pocztowy: " + res.guest.zipCode, 10, 140);
        doc.text("Miejscowosc: " + res.guest.city, 90, 140);
        doc.text("Ulica: " + res.guest.address, 150, 140);
        doc.setFontSize(16);
        doc.setDrawColor(76, 175, 80);
        doc.line(10, 162, 200, 162);
        doc.text("Dane kontaktowe: ", 10, 160);
        doc.setFontSize(12);
        doc.text("Telefon: " + res.guest.phone, 10, 170);
        doc.text("E-mail: " + res.guest.email, 90, 170);
        // @ts-ignore
        doc.addImage(base64QrCode, 150, 0, 50, 50);
        doc.setFontSize(9);
        doc.setFont('MagicR','italic','normal');
        doc.text('Wygenerowane przez: Hotel Manager ©', 80, 290);
        doc.save(res.id + ".pdf");
    }
}
