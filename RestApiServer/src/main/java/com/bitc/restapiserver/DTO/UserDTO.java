package com.bitc.restapiserver.DTO;

import lombok.Data;

@Data
public class UserDTO {
  private String userId;
  private String userPw;
  private String userName;
  private String userEmail;
}
