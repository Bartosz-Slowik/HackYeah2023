package com.undefinedteam.gwizdapp.contract.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RegisterResponseDto {
  private String userName;
  private String email;
}
