package com.hotel_manager.api.controllers;

import com.hotel_manager.api.dto.RoomDto;
import com.hotel_manager.api.models.Room;
import com.hotel_manager.api.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
public class RoomController {

    private final RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("room")
    public ResponseEntity<List<RoomDto>> getRooms() {
        return new ResponseEntity<>(roomService.getAllRooms(), HttpStatus.OK);
    }

    @GetMapping("room/{id}")
    public ResponseEntity<RoomDto> getRoom(@PathVariable int id) {
        return ResponseEntity.ok(roomService.getRoomById(id));
    }
}
