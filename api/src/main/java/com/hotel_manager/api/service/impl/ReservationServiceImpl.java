package com.hotel_manager.api.service.impl;

import com.hotel_manager.api.dto.ReservationDto;
import com.hotel_manager.api.models.Reservation;
import com.hotel_manager.api.repository.ReservationRepository;
import com.hotel_manager.api.repository.RoomRepository;
import com.hotel_manager.api.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final RoomRepository roomRepository;
    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository, RoomRepository roomRepository) {
        this.reservationRepository = reservationRepository;
        this.roomRepository = roomRepository;
    }

    @Override
    public List<ReservationDto> getReservationsByRoomId(int roomId) {
        List<Reservation> reservations = reservationRepository.findByRoomId(roomId);
        return reservations.stream().map(this::mapToDto).toList();
    }

    private ReservationDto mapToDto(Reservation reservation) {
        ReservationDto reservationDto = new ReservationDto();
        reservationDto.setId(reservation.getId());
        reservationDto.setGuestId(reservation.getGuestId());
        reservationDto.setReservationDate(reservation.getReservationDate());
        reservationDto.setReservationStatus(reservation.getReservationStatus());
        reservationDto.setReservationTime(reservation.getReservationTime());
        reservationDto.setPaymentMethod(reservation.getPaymentMethod());
        reservationDto.setPaymentStatus(reservation.getPaymentStatus());
        return reservationDto;
    }
}
