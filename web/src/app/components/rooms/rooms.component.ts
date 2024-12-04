import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TableLazyLoadEvent} from "primeng/table";
import {PageableDto} from "../../dto/pagination/pageable-dto";
import {RoomsService} from "../../services/rooms/rooms.service";

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

  constructor(private fb: FormBuilder, public roomsService: RoomsService) {
  }

  ngOnInit() {
    this.form = this.fb.group({});
    this.roomsService.readRooms(this.page).subscribe(response => {
      console.log(response)
      this.pokoje = response;
    })
  }

  szukajPokoju() {

  }

  onPageChange($event: TableLazyLoadEvent) {

  }
}
