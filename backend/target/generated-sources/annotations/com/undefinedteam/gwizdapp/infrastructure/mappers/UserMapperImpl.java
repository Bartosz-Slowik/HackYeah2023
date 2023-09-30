package com.undefinedteam.gwizdapp.infrastructure.mappers;

import com.undefinedteam.gwizdapp.contract.model.RegisterResponseDto;
import com.undefinedteam.gwizdapp.infrastructure.entities.UserEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-09-30T20:49:01+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 20.0.2 (Eclipse Adoptium)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public RegisterResponseDto toDto(UserEntity userEntity) {
        if ( userEntity == null ) {
            return null;
        }

        RegisterResponseDto registerResponseDto = new RegisterResponseDto();

        registerResponseDto.setUserName( userEntity.getUserName() );
        registerResponseDto.setEmail( userEntity.getEmail() );

        return registerResponseDto;
    }
}
