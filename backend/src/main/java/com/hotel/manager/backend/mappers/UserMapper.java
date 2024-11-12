package com.hotel.manager.backend.mappers;

import com.hotel.manager.backend.dto.UserDto;
import com.hotel.manager.backend.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
}
