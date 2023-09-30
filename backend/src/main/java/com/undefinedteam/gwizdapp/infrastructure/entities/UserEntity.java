package com.undefinedteam.gwizdapp.infrastructure.entities;

import com.undefinedteam.gwizdapp.infrastructure.entities.enums.RoleEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
public class UserEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;
  private String userName;
  private String password;
  @Enumerated(EnumType.STRING)
  private RoleEnum role;
  private String email;

}
