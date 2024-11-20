package com.hotel.manager.backend.services;

import com.hotel.manager.backend.dto.RoomDto;
import com.hotel.manager.backend.dto.RoomsResponseDto;
import com.hotel.manager.backend.entities.Room;
import com.hotel.manager.backend.repositories.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomsService {

    private final RoomRepository roomRepository;

    public RoomsResponseDto getAllRooms(int pageNumber) {

        Pageable pageable = PageRequest.of(pageNumber, 10);
        Page<Room> roomPage =  roomRepository.findAll(pageable);
        RoomsResponseDto roomsDto = new RoomsResponseDto();

        roomsDto.setPageNumber(roomPage.getNumber());
        roomsDto.setTotalPages(roomPage.getTotalPages());
        roomsDto.setRoomDtoList(roomPage.stream().map(Room::getRoomDto).toList());

        return roomsDto;
    }
}
