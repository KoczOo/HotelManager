package com.hotel_manager.api.service;

import com.hotel_manager.api.dto.BookingDto;
import com.hotel_manager.api.dto.ReservationDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ReservationService {

    List<ReservationDto> getReservationsByRoomId(int roomId);
    ReservationDto createBooking(int roomId, BookingDto bookingDto);
    List<ReservationDto> getAllReservations();
    HttpStatus deleteReservation(String reservationId);
}
