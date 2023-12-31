package com.bitc.asyncserver.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    // addMapping(url) : 지정한 패턴에 맞는 페이지에 대해서 접근 권하을 확인
    // allowedOrigins(url) : 접근을 허용할 외부 url
    registry
      .addMapping("/**")
      .allowedOrigins("http://localhost:3000");
  }
}
