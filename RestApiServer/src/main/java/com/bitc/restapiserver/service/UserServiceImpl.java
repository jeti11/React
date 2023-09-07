package com.bitc.restapiserver.service;

import com.bitc.restapiserver.DTO.UserDTO;
import com.bitc.restapiserver.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
  @Autowired
  private UserMapper userMapper;

  @Override
  public List<UserDTO> getUserList() throws Exception {
    List<UserDTO> userList = userMapper.getUserList();
    return userList;
  }

  @Override
  public void insertUser(UserDTO userDTO) throws Exception {
    userMapper.insertUser(userDTO);
  }
}
