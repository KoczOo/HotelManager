package com.hotel.manager.backend.controllers;

import com.hotel.manager.backend.config.UserAuthProvider;
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
    private final UserAuthProvider userAuthProvider;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto) {
     UserDto user = userService.login(credentialsDto);
     user.setToken(userAuthProvider.createToken(user));
     return ResponseEntity.ok(user);
    }
}
