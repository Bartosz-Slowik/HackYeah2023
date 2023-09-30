package com.undefinedteam.gwizdapp.infrastructure.filters;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class OriginFilter extends OncePerRequestFilter {

  private static final Logger logger = LoggerFactory.getLogger(OriginFilter.class);

  @Override
  protected void doFilterInternal(
      HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    String origin = request.getHeader(HttpHeaders.ORIGIN);
    response.setHeader("Access-Control-Allow-Origin", origin);
    response.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Max-Age", "180");

    if(request.getMethod().equals(HttpMethod.OPTIONS.name())){
      String requestedAllowHeaders = request.getHeader("Access-Control-Request-Headers");
      response.setHeader("Access-Control-Allow-Headers", requestedAllowHeaders);
      response.setStatus(200);
    }

    filterChain.doFilter(request, response);
  }

}