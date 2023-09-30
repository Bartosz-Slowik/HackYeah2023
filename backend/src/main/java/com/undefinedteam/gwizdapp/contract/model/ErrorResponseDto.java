package com.undefinedteam.gwizdapp.contract.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ErrorResponseDto {
  private long time;
  private int status;
  private String message;

  public ErrorResponseDto(int status, String message) {
    this.status = status;
    this.message = message;
    time = System.currentTimeMillis();
  }
}
