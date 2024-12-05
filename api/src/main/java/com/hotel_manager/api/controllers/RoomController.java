package com.hotel_manager.api.controllers;

import com.hotel_manager.api.models.Room;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
public class RoomController {

    @GetMapping("room")
    public ResponseEntity<List<Room>> getRooms() {
        List<Room> rooms = new ArrayList<Room>();
        rooms.add(new Room(1, 100, 2, 1 ));
        rooms.add(new Room(2, 101, 2, 1 ));
        rooms.add(new Room(3, 102, 2, 1 ));
        return ResponseEntity.ok(rooms);
    }
}
