package com.hotel_manager.api.repository;

import com.hotel_manager.api.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    List<Reservation> findByRoomId(int roomId);
}
