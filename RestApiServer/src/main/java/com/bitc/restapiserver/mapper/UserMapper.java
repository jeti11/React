package com.bitc.restapiserver.mapper;

import com.bitc.restapiserver.DTO.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

  List<UserDTO> getUserList() throws Exception;

  void insertUser(UserDTO userDTO) throws Exception;
}
