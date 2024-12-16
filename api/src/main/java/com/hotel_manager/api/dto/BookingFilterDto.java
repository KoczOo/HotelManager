package com.hotel_manager.api.dto;

import lombok.Data;

import java.util.Date;

@Data
public class BookingFilterDto {
    private Date  dateFrom;
    private Date dateTo;
}
