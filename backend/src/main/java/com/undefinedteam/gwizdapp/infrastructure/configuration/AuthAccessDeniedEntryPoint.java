package com.undefinedteam.gwizdapp.infrastructure.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.undefinedteam.gwizdapp.contract.model.ErrorResponseDto;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
//@Component
public class AuthAccessDeniedEntryPoint implements AuthenticationEntryPoint {

  private final ObjectMapper mapper;

  @Override
  public void commence(
      HttpServletRequest request,
      HttpServletResponse response,
      AuthenticationException authException)
      throws IOException {
    String uri = request.getRequestURI();
    String path = (String) request.getAttribute(RequestDispatcher.FORWARD_REQUEST_URI);
    log.info("Request denied: AuthenticationException '{}': {} ({})", path, authException.getMessage(), uri);
    ErrorResponseDto responseObject = new ErrorResponseDto(403, "Auth access denied: " + authException.getMessage());

    String responseJson = mapper.writeValueAsString(responseObject);

    response.setContentType("application/json;charset=UTF-8");
    response.setContentLength(responseJson.length());
    response.setStatus(403);
    response.getWriter().write(responseJson);
  }
}