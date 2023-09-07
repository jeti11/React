package com.bitc.restapiserver.controller;

import com.bitc.restapiserver.DTO.UserDTO;
import com.bitc.restapiserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// @RequiredArgsConstructor : @Autowired 대신 사용(최근 추세)
@RequiredArgsConstructor

@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/quiz")
@RestController
public class Quiz1Controller {

  // @Autowired 생략하고, private 뒤에 final 붙여줌 (mapper도 동일하게 적용가능)
  private final UserService userService;

  @RequestMapping(value = "/getUserList", method = RequestMethod.GET)
  public Object getUserList() throws Exception {
    List<UserDTO> userList = userService.getUserList();

    return userList;
  }

  @RequestMapping(value = "/insertUser", method = RequestMethod.POST)
  public void insertUser(UserDTO userDTO) throws Exception {
    userService.insertUser(userDTO);
  }
}
