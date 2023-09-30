package com.undefinedteam.gwizdapp.application;

import com.undefinedteam.gwizdapp.contract.api.TeapotApi;
import com.undefinedteam.gwizdapp.contract.model.teapot.TeapotResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class TeapotController implements TeapotApi {
  @Override
  public TeapotResponseDto teapot() {
    return new TeapotResponseDto("i'm a teapot");
  }
}
