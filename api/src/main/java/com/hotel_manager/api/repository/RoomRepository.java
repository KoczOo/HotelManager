package com.hotel_manager.api.repository;

import com.hotel_manager.api.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Integer> {
}
