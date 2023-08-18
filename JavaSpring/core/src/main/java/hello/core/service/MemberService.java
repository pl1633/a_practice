package hello.core.service;

import hello.core.member.Member;
import org.springframework.stereotype.Component;


public interface MemberService {
    //회원가입
    void join(Member member);
    //회원조회
    Member findMember(Long id);
}
