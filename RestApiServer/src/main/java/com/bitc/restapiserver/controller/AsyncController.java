package com.bitc.restapiserver.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

// @CrossOrigin : 해당 메소드에 한해서만 다른 서버에서 접속할 수 있도록 허용하는 어노테이션
// @CrossOrigin 을 클래스 위에 입력하면 클래스 내부의 모든 메소드에 적용됨
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/async")
// @RestController = @Controller + @Responsebody
@RestController
public class AsyncController {

  @RequestMapping(value = "/")
  public String index() throws Exception {
    return "index 페이지";
  }


//  @CrossOrigin(origins = {"http://localhost:3000"})
  @RequestMapping(value = "/sendDataGet", method = RequestMethod.GET)
  public Object sendDataGet() throws Exception {
    Map<String, String> result = new HashMap<>();

    result.put("result", "success");
    result.put("data", "axios를 이용한 비동기 통신");

    return result;
  }

  @RequestMapping(value = "/sendDataGetParam", method = RequestMethod.GET)
  public Object sendDataGetParam(@RequestParam("idx") int idx) throws Exception {
    Map<String, String> result = new HashMap<>();

    result.put("result", "success");
    result.put("data", "150");
    result.put("idx", String.valueOf(idx));

    return result;
  }


  @RequestMapping(value = "/sendDataPost", method = RequestMethod.POST)
  public Object sendDataPost(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) throws Exception {
    Map<String, String> user = new HashMap<>();
    user.put("userId", userId);
    user.put("userPw", userPw);

    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", user);

    return result;
  }

  @RequestMapping(value = "/sendDataPut", method = RequestMethod.PUT)
  public Object sendDataPut(@RequestParam("idx") int idx) throws Exception {
    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("idx", idx);

    return result;
  }

  @RequestMapping(value = "/sendDataDelete", method = RequestMethod.DELETE)
  public Object sendDataDelete(@RequestParam("idx") int idx) throws Exception {
    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("idx", idx);

    return result;
  }
}





























