package com.bitc.quiz.service;

import com.bitc.quiz.DTO.BoardDTO;

import java.util.List;

public interface BoardService {
  List<BoardDTO> selectBoardList() throws Exception;

  BoardDTO selectBoardDetail(int num) throws Exception;

  void insertBoard(BoardDTO boardDTO) throws Exception;

  void updateBoard(BoardDTO boardDTO) throws Exception;

  void deleteBoard(int num) throws Exception;
}
