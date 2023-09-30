package com.undefinedteam.gwizdapp.infrastructure.repository;

import com.undefinedteam.gwizdapp.infrastructure.entities.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, UUID> {

  Optional<UserEntity> findByUserName(String userName);

  boolean existsByEmail(String email);
}
