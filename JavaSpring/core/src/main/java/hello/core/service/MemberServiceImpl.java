package hello.core.service;

import hello.core.member.Member;
import hello.core.repository.MemberRepository;
import hello.core.repository.MemoryMemberRepository;
public class MemberServiceImpl implements MemberService{
    private final MemberRepository memberRepository;

    public MemberServiceImpl(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }
    // MemberServiceImpl 입장에서 생성자를 통해 어떤 구현객체가 들어올지는 알 수 없다.
    // 뭐가올지는 appconfig만 안다

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
