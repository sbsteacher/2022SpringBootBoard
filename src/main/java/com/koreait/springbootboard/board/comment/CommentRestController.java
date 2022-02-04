package com.koreait.springbootboard.board.comment;

import com.koreait.springbootboard.ResultVo;
import com.koreait.springbootboard.board.comment.model.BoardCommentEntity;
import com.koreait.springbootboard.board.comment.model.BoardCommentVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ajax/comment")
public class CommentRestController {

    @Autowired private CommentService service;

    @PostMapping
    public ResultVo insComment(@RequestBody BoardCommentEntity entity) {
        return service.insComment(entity);
    }

    @GetMapping
    public List<BoardCommentVo> selCommentList(BoardCommentEntity entity) {
        return service.selCommentList(entity);
    }
}
