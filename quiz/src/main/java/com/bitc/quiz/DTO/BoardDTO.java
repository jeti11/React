package com.bitc.quiz.DTO;

import lombok.Data;

@Data
public class BoardDTO {
  private int num;
  private String title;
  private String content;
  private String id;
  private String postdate;
  private int visitcount;
}
