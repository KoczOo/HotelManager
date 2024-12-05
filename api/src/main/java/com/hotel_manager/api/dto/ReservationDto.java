package com.hotel_manager.api.dto;

import lombok.Data;

@Data
public class ReservationDto {
    private int id;
    private int guestId;
    private String reservationDate;
    private String reservationTime;
    private String reservationStatus;
    private String paymentMethod;
    private String paymentStatus;
}
