package com.hotel_manager.api.exceptions;

public class RoomNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1;

    public RoomNotFoundException(String message) {
        super(message);
    }

}
