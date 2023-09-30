package com.undefinedteam.gwizdapp.infrastructure.mappers;

import com.undefinedteam.gwizdapp.contract.model.RegisterRequestDto;
import com.undefinedteam.gwizdapp.contract.model.RegisterResponseDto;
import com.undefinedteam.gwizdapp.infrastructure.entities.UserEntity;
import org.mapstruct.Mapper;

@Mapper(config = CentralMapperConfig.class)
public interface UserMapper {

  RegisterResponseDto toDto(UserEntity userEntity);
}
