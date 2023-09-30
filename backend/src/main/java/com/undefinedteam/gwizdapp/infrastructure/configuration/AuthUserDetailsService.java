package com.undefinedteam.gwizdapp.infrastructure.configuration;

import com.undefinedteam.gwizdapp.infrastructure.entities.UserEntity;
import com.undefinedteam.gwizdapp.infrastructure.entities.enums.RoleEnum;
import com.undefinedteam.gwizdapp.infrastructure.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
//@Service
public class AuthUserDetailsService implements UserDetailsService {

  private final UserRepository userEntityRepository;

  @Override
  public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
    UserEntity userEntity = userEntityRepository.findByUserName(login)
        .orElseThrow(() -> new UsernameNotFoundException("User not found"));

    UUID userId = userEntity.getId();
    RoleEnum role = userEntity.getRole();

    List<SimpleGrantedAuthority> grantedAuthorities =
        role.getAuthoritiesList()
            .stream()
            .map(RoleEnum::name)
            .map(SimpleGrantedAuthority::new)
            .toList();

    return new User(userId.toString(), userEntity.getPassword(), grantedAuthorities);
  }
}