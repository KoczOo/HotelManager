package com.hotel_manager.api.dto;

import lombok.Data;

@Data
public class RoomDto {
    private int id;
    private int number;
    private int capacity;
    private int floor;
}
