package com.koreait.springbootboard;

import com.koreait.springbootboard.user.UserMapper;
import com.koreait.springbootboard.user.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component("authFacade")
public class AuthenticationFacade {

    @Autowired private UserMapper mapper;

    public UserEntity getLoginUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth == null) { return null; }
        String uid = auth.getName();
        UserEntity entity = new UserEntity();
        entity.setUid(uid);
        UserEntity loginUser = mapper.selUser(entity);
        loginUser.setUpw(null);
        return loginUser;
    }

    public int getLoginUserPk() {
        return getLoginUser().getIuser();
    }
}
