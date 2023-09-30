package com.undefinedteam.gwizdapp.contract.api;

import com.undefinedteam.gwizdapp.contract.model.RegisterRequestDto;
import com.undefinedteam.gwizdapp.contract.model.RegisterResponseDto;
import com.undefinedteam.gwizdapp.infrastructure.configuration.SecurityConfig;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Validated
@RequestMapping("auth")
public interface AuthApi {

  @PostMapping(SecurityConfig.SIGNUP_PAGE)
  RegisterResponseDto signup(@RequestBody @Valid RegisterRequestDto registerRequest);

  @RequestMapping(value = SecurityConfig.SIGNIN_SUCCESS_PAGE,  method = {RequestMethod.POST, RequestMethod.GET})
  ResponseEntity<?> signinSuccess();
  @RequestMapping(value = SecurityConfig.SIGNIN_FAILED_PAGE, method = {RequestMethod.POST, RequestMethod.GET})
  ResponseEntity<?> signinFailed();

  @RequestMapping(value = SecurityConfig.SIGNOUT_DONE_PAGE, method = {RequestMethod.POST, RequestMethod.GET})
  ResponseEntity<?> signoutDone();
}
