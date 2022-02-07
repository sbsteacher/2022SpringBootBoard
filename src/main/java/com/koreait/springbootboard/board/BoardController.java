package com.koreait.springbootboard.board;

import com.koreait.springbootboard.Const;
import com.koreait.springbootboard.board.model.BoardDto;
import com.koreait.springbootboard.board.model.BoardEntity;
import com.koreait.springbootboard.board.model.BoardVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired private BoardService service;

    @GetMapping("/list")
    public void list() {}

    @GetMapping("/detail")
    public void detail() {}

    @GetMapping("/detail_item")
    public void selBoard(Model model, BoardDto dto) {
        model.addAttribute(Const.DATA, service.selBoard(dto));
    }

    @GetMapping("/write")
    public void write(@ModelAttribute("entity") BoardEntity entity) {
        System.out.println(entity);
    }

    @PostMapping("/write")
    public String writeProc(BoardEntity entity) {
        service.insBoard(entity);
        return "redirect:/board/list?icategory=" + entity.getIcategory();
    }
}
