package com.hotel_manager.api.service;

import com.hotel_manager.api.dto.BookingDto;
import com.hotel_manager.api.dto.ReservationDto;

import java.util.List;

public interface ReservationService {

    List<ReservationDto> getReservationsByRoomId(int roomId);
    ReservationDto createBooking(int roomId, BookingDto bookingDto);
    List<ReservationDto> getAllReservations();
}
