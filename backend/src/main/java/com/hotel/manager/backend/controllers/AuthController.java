package com.hotel.manager.backend.controllers;

import com.hotel.manager.backend.dto.CredentialsDto;
import com.hotel.manager.backend.dto.UserDto;
import com.hotel.manager.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto) {
     UserDto user = userService.login(credentialsDto);
     return ResponseEntity.ok(user);
    }
}
