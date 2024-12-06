package com.hotel_manager.api.models;

import com.hotel_manager.api.enums.RoomStandard;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@AllArgsConstructor
@RequiredArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int number;
    @Enumerated(EnumType.STRING)
    private RoomStandard standard;
    private int capacity;
    private int floor;
    private int price;



    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reservation> reservations = new ArrayList<Reservation>();
}
