package com.bitc.restapiserver.service;

import com.bitc.restapiserver.DTO.UserDTO;

import java.util.List;

public interface UserService {

  List<UserDTO> getUserList() throws Exception;

  void insertUser(UserDTO userDTO) throws Exception;
}
