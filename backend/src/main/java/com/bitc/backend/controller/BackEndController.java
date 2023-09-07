package com.bitc.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// 실제 프로젝트 할 때는 서버(백엔드)부터 만들고 난 후, src/main/ 위치에 프론트(리액트 프로젝트) 생성하는게 빠름

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BackEndController {
  @RequestMapping(value = "/hello", method = RequestMethod.GET)
  public String hello() throws Exception {
    return "Hello World!";
  }
}
