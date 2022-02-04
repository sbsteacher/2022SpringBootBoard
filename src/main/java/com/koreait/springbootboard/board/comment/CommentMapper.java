package com.koreait.springbootboard.board.comment;

import com.koreait.springbootboard.board.comment.model.BoardCommentEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommentMapper {
    int insComment(BoardCommentEntity entity);
}
