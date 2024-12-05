package com.hotel_manager.api.controllers;

import com.hotel_manager.api.dto.ReservationDto;
import com.hotel_manager.api.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(final ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/room/reservations/{roomId}")
    public List<ReservationDto> getReservationsByRoomId(@PathVariable("roomId") final int roomId) {
        return reservationService.getReservationsByRoomId(roomId);
    }

}
