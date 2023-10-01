package com.undefinedteam.gwizdapp.contract.api;

import com.undefinedteam.gwizdapp.contract.model.teapot.TeapotResponseDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

public interface TeapotApi {

  @GetMapping("/teapot")
  TeapotResponseDto teapot();

}
