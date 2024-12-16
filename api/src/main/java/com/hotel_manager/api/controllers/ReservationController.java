package com.hotel_manager.api.controllers;

import com.hotel_manager.api.dto.BookingDto;
import com.hotel_manager.api.dto.ReservationDto;
import com.hotel_manager.api.models.Reservation;
import com.hotel_manager.api.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/room/reservations/{roomId}")
    public ResponseEntity<ReservationDto> createReservation(@PathVariable(value = "roomId") int roomId, @RequestBody BookingDto bookingDto) {
        return new ResponseEntity<>(reservationService.createBooking(roomId, bookingDto), HttpStatus.CREATED);
    }

    @GetMapping("/reservations")
    public ResponseEntity<List<ReservationDto>> getAllReservations() {
        return ResponseEntity.ok(reservationService.getAllReservations());
    }

    @DeleteMapping("/reservations/{reservationId}")
    public ResponseEntity<HttpStatus> deleteReservation(@PathVariable(value = "reservationId") final String reservationId) {
        return ResponseEntity.ok(reservationService.deleteReservation(reservationId));
    }

}
