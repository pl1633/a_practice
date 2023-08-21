package hello.core.service;

import hello.core.member.Member;
import hello.core.repository.MemberRepository;
import hello.core.repository.MemoryMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;

    //테스트 용도
    public MemberRepository getMemberRepository(){
        return memberRepository;
    }

    //회원가입
    @Override
    public void join(Member member){
        if(memberRepository.findById(member.getId())!=null){
            System.out.println("duplicate");
        }else{
            memberRepository.save(member);
        }
    }
    //회원조회
    @Override
    public Member findMember(Long id) {
        Member member = memberRepository.findById(id);
        return member;
    }
}
