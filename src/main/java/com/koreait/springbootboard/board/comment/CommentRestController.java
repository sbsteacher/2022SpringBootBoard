package com.koreait.springbootboard.board.comment;

import com.koreait.springbootboard.ResultVo;
import com.koreait.springbootboard.board.comment.model.BoardCommentEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ajax/comment")
public class CommentRestController {

    @PostMapping
    public ResultVo insComment(@RequestBody BoardCommentEntity entity) {
        System.out.println(entity);
        return null;
    }
}
