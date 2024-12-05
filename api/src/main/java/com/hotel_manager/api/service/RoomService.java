package com.hotel_manager.api.service;

import com.hotel_manager.api.dto.RoomDto;

import java.util.List;

public interface RoomService {
    List<RoomDto> getAllRooms();
    RoomDto getRoomById(int id);
}
