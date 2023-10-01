package com.undefinedteam.gwizdapp.infrastructure.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "photos")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PhotoEntity extends BaseEntity {
  private String name;
  private String path;
  private String fileType;
}
