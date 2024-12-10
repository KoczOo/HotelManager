package com.hotel_manager.api.dto;

import jakarta.persistence.ForeignKey;
import lombok.Data;

import java.util.Date;

@Data
public class GuestDto {
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
}
