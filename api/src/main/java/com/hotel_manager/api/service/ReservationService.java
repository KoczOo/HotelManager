package com.hotel_manager.api.service;

import com.hotel_manager.api.dto.ReservationDto;
import com.hotel_manager.api.models.Reservation;

import java.util.List;

public interface ReservationService {

    List<ReservationDto> getReservationsByRoomId(int roomId);
}
