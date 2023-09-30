package com.undefinedteam.gwizdapp.contract.model.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BadRequestException extends RuntimeException {
  private String message;
}
