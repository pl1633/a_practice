package hello.core.repository;

import hello.core.member.Member;

public interface MemberRepository {
    //회원을 저장하는 기능
    void save(Member member);
    //회원의 아이디로 회원을 찾는 기능
    Member findById(Long memberId);

}
