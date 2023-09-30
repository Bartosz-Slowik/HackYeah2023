package com.undefinedteam.gwizdapp.contract.model;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RegisterRequestDto {
  @Size(min = 3, max = 20)
  private String userName;

  @Size(min = 8, max = 100)
  private String password;

  @Size(min = 5, max = 255)
  private String email;
}
