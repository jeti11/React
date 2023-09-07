package com.bitc.quiz.service;

import com.bitc.quiz.DTO.BoardDTO;
import com.bitc.quiz.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {

  private final BoardMapper boardMapper;

  @Override
  public List<BoardDTO> selectBoardList() throws Exception {
    List<BoardDTO> boardList = boardMapper.selectBoardList();

    return boardList;
  }

  @Override
  public BoardDTO selectBoardDetail(int num) throws Exception {
    boardMapper.updateVisitCount(num);
    BoardDTO board = boardMapper.selectBoardDetail(num);

    return board;
  }

  @Override
  public void insertBoard(BoardDTO boardDTO) throws Exception {
    boardMapper.insertBoard(boardDTO);
  }

  @Override
  public void updateBoard(BoardDTO boardDTO) throws Exception {
    boardMapper.updateBoard(boardDTO);
  }

  @Override
  public void deleteBoard(int num) throws Exception {
    boardMapper.deleteBoard(num);
  }
}
