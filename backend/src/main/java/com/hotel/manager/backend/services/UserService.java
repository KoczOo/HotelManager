package com.hotel.manager.backend.services;

import com.hotel.manager.backend.dto.CredentialsDto;
import com.hotel.manager.backend.dto.UserDto;
import com.hotel.manager.backend.entities.User;
import com.hotel.manager.backend.exceptions.AppException;
import com.hotel.manager.backend.mappers.UserMapper;
import com.hotel.manager.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByLogin(credentialsDto.login())
                .orElseThrow(() -> new AppException("Nie znaleziona uzytkownika", HttpStatus.NOT_FOUND));
        if(passwordEncoder.matches(CharBuffer.wrap(credentialsDto.haslo()),
                user.getHaslo())) {
            return userMapper.toUserDto(user);
        }
        throw new AppException("Login lub hasło nieprawidłowe", HttpStatus.BAD_REQUEST);
    }

    public UserDto findByLogin(String login) {
        User user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }
}
