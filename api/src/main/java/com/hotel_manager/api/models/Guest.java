package com.hotel_manager.api.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Guest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String name;
    private String surname;
    private String sex;
    private Date birthday;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    @OneToOne
    @MapsId
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;
}
