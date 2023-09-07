package com.bitc.quiz.mapper;

import com.bitc.quiz.DTO.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  List<BoardDTO> selectBoardList() throws Exception;

  BoardDTO selectBoardDetail(int num) throws Exception;

  void updateVisitCount(int num) throws Exception;

  void insertBoard(BoardDTO boardDTO) throws Exception;

  void updateBoard(BoardDTO boardDTO) throws Exception;

  void deleteBoard(int num) throws Exception;
}
