import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageableDto} from "../../dto/pagination/pageable-dto";
import {RoomsService} from "../../services/rooms/rooms.service";
import {DialogService} from "primeng/dynamicdialog";
import {BookingModalComponent} from "./booking-modal/booking-modal.component";

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
    form: FormGroup;
    page: number = 0;
    totalRecords: number = 0;
    pageable: PageableDto = new PageableDto(this.page, 10, null);
    pokoje: any[];
    isLoading: boolean = true;

    constructor(private fb: FormBuilder, public roomService: RoomsService, private dialogService: DialogService,) {
    }

    ngOnInit() {
        this.form = this.fb.group({});
        this.roomService.readRooms().subscribe(response => {
            this.pokoje = response;
        })
    }

    szukajPokoju() {

    }

    showBookRoomModal(header: string, data: any) {
        let refBookingModal = this.dialogService.open(BookingModalComponent, {
            data: data,
            header: header,
            width: "80%",
            baseZIndex: 100,
            closable: false,
            focusOnShow: false,
        });
    }
}
