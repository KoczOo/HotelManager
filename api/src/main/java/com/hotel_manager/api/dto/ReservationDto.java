package com.hotel_manager.api.dto;

import lombok.Data;

import java.util.Date;


@Data
public class ReservationDto {
    private String id;
    private Date dateFrom;
    private Date dateTo;
    private RoomDto room;
    private GuestDto guest;
}
