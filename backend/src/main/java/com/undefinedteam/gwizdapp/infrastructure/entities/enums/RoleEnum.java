package com.undefinedteam.gwizdapp.infrastructure.entities.enums;

import java.util.List;

public enum RoleEnum {
  USER, ADMIN;

  public List<RoleEnum> getAuthoritiesList() {
    if(this == ADMIN) {
      return List.of(USER, ADMIN);
    }
    return List.of(USER);
  }
}
