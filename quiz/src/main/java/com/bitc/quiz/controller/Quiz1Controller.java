package com.bitc.quiz.controller;

import com.bitc.quiz.DTO.BoardDTO;
import com.bitc.quiz.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/quiz")
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class Quiz1Controller {
  private final BoardService boardService;

  @RequestMapping(value = "/boardList", method = RequestMethod.GET)
  public Object selectBoardList() throws Exception {
    List<BoardDTO> boardList = boardService.selectBoardList();

    return boardList;
  }

  @RequestMapping(value = "/boardDetail", method = RequestMethod.GET)
  public Object selectBoardDetail(@RequestParam("num") int num) throws Exception {
    BoardDTO board = boardService.selectBoardDetail(num);

    return board;
  }

  @RequestMapping(value = "/boardWrite", method = RequestMethod.POST)
  public Object insertBoard(BoardDTO boardDTO) throws Exception {
    boardService.insertBoard(boardDTO);

    return null;
  }

  @RequestMapping(value = "/boardUpdate", method = RequestMethod.PUT)
  public Object updateBoard(BoardDTO boardDTO) throws Exception {
    boardService.updateBoard(boardDTO);
    return null;
  }

  @RequestMapping(value = "/boardDelete", method = RequestMethod.DELETE)
  public Object deleteBoard(@RequestParam("num") int num) throws Exception {
    boardService.deleteBoard(num);

    return null;
  }
}



























