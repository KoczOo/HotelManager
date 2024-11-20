package com.hotel.manager.backend.entities;

import com.hotel.manager.backend.dto.RoomDto;
import com.hotel.manager.backend.enums.RoomType;
import jakarta.persistence.*;
import lombok.Data;

import java.lang.reflect.Type;

@Entity
@Data
public class Room {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long number;

    @Enumerated(EnumType.ORDINAL)
    private RoomType type;

    private Long flor;

    private Long price;

    public RoomDto getRoomDto() {
        RoomDto roomDto = new RoomDto();
        roomDto.setId(id);
        roomDto.setNumber(number);
        roomDto.setFlor(flor);
        roomDto.setType(type);
        roomDto.setPrice(price);

        return roomDto;
    }
}
