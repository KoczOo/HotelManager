package com.hotel.manager.backend.dto;

import com.hotel.manager.backend.enums.RoomType;
import lombok.Data;

@Data
public class RoomDto {

    private Long id;

    private Long number;

    private RoomType type;

    private Long flor;

    private Long price;

}
