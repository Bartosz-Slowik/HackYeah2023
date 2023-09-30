package com.undefinedteam.gwizdapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(value = "com.undefinedteam.gwizdapp")
@EnableJpaRepositories

public class GwizdApplication {

  public static void main(String[] args) {
    SpringApplication.run(GwizdApplication.class, args);
  }
}
