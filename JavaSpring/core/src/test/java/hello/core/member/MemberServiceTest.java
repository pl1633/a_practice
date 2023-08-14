package hello.core.member;

import hello.core.repository.MemoryMemberRepository;
import hello.core.service.MemberService;
import hello.core.service.MemberServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class MemberServiceTest {
    @Test
    void join(){
        MemberService mem = new MemberServiceImpl();
        //given 상황
        //테스트 회원을 생성한다 (id는1, 이름은 name, 회원등급은 VIP)
        Member test = new Member(1L,"name",Grade.VIP);
        //when 처리
        //멤버를 가입시킨다
        //회원저장소에서 가입한 멤버를 찾아본다
        mem.join(test);
        Member find = mem.findMember(1L);
        //then 결과
        //내가 가입시킨 멤버와 찾은 멤버가 같으면 ok
        Assertions.assertThat(test).isEqualTo(find);
    }
}
