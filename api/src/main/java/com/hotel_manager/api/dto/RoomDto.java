package com.hotel_manager.api.dto;

import com.hotel_manager.api.enums.RoomStandard;
import lombok.Data;

@Data
public class RoomDto {
    private int id;
    private int number;
    private RoomStandard standard;
    private int capacity;
    private int floor;
    private int price;

}
