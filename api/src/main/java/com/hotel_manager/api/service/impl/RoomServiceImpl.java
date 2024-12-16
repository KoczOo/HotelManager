package com.hotel_manager.api.service.impl;

import com.hotel_manager.api.dto.BookingFilterDto;
import com.hotel_manager.api.dto.RoomDto;
import com.hotel_manager.api.exceptions.RoomNotFoundException;
import com.hotel_manager.api.models.Room;
import com.hotel_manager.api.repository.RoomRepository;
import com.hotel_manager.api.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    @Autowired
    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public List<RoomDto> getAllRooms(BookingFilterDto bookingFilterDto) {
        List<Room> rooms;
        if (bookingFilterDto.getDateFrom() == null || bookingFilterDto.getDateTo() == null) {
            rooms = roomRepository.findAll();
        } else {
            rooms = roomRepository.findAll().stream()
                    .filter(room -> room.getReservations().stream()
                            .allMatch(reservation ->
                                    reservation.getDateTo().before(bookingFilterDto.getDateFrom()) ||
                                            reservation.getDateFrom().after(bookingFilterDto.getDateTo())
                            )
                    )
                    .toList();

        }
        return rooms.stream().map(this::mapToDto).collect(Collectors.toList());
    }


    @Override
    public RoomDto getRoomById(int id) {
        Room room = roomRepository.findById(id).orElseThrow(()-> new RoomNotFoundException("Nie znaleziono pokoju o wskazanym ID!"));
        return mapToDto(room);
    }

    private RoomDto mapToDto(Room room) {
        return getRoomDto(room);
    }

    static RoomDto getRoomDto(Room room) {
        RoomDto roomDto = new RoomDto();
        roomDto.setId(room.getId());
        roomDto.setNumber(room.getNumber());
        roomDto.setStandard(room.getStandard());
        roomDto.setCapacity(room.getCapacity());
        roomDto.setFloor(room.getFloor());
        roomDto.setPrice(room.getPrice());
        return roomDto;
    }

    private Room mapToModel(RoomDto roomDto) {
        Room room = new Room();
        room.setNumber(roomDto.getNumber());
        room.setCapacity(roomDto.getCapacity());
        room.setFloor(roomDto.getFloor());
        return room;
    }
}
