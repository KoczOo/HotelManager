package com.hotel_manager.api.service;

import com.hotel_manager.api.dto.BookingFilterDto;
import com.hotel_manager.api.dto.RoomDto;

import java.util.List;

public interface RoomService {
    List<RoomDto> getAllRooms(BookingFilterDto bookingFilterDto);
    RoomDto getRoomById(int id);
}
