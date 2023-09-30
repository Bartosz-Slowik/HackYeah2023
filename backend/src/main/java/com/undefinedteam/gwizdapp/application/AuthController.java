package com.undefinedteam.gwizdapp.application;

import com.undefinedteam.gwizdapp.contract.api.AuthApi;
import com.undefinedteam.gwizdapp.contract.model.RegisterRequestDto;
import com.undefinedteam.gwizdapp.contract.model.RegisterResponseDto;
import com.undefinedteam.gwizdapp.contract.model.exceptions.BadRequestException;
import com.undefinedteam.gwizdapp.infrastructure.entities.UserEntity;
import com.undefinedteam.gwizdapp.infrastructure.mappers.UserMapper;
import com.undefinedteam.gwizdapp.infrastructure.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RestController;


//@RestController
@RequiredArgsConstructor
public class AuthController implements AuthApi {
  private final UserRepository userRepo;
  private final PasswordEncoder encoder;
  private final UserMapper mapper;

  @Override
  public RegisterResponseDto signup(RegisterRequestDto registerRequest){
    if(userRepo.existsByEmail(registerRequest.getEmail())){
      throw new BadRequestException("user with this email already exists!") ;
    }

    UserEntity userEntity = new UserEntity();
    userEntity.setEmail(registerRequest.getEmail());
    userEntity.setPassword(encoder.encode(registerRequest.getPassword()));
    userEntity.setUserName(registerRequest.getUserName());

    return mapper.toDto(userRepo.save(userEntity));
  }

  @Override
  public ResponseEntity<?> signinSuccess(){
    return ResponseEntity.ok("sign in successful");
  }

  @Override
  public ResponseEntity<?> signinFailed(){
    return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Wrong login or password");
  }

  @Override
  public ResponseEntity<?> signoutDone(){
    return ResponseEntity.ok("sign out done");
  }

}
