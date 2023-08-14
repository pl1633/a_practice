package hello.core.service;

import hello.core.member.Member;
import hello.core.repository.MemoryMemberRepository;
public class MemberServiceImpl implements MemberService{
    public MemoryMemberRepository mem = new MemoryMemberRepository();
    //회원가입
    @Override
    public void join(Member member){
        if(mem.findById(member.getId())!=null){
            System.out.println("duplicate");
        }else{
            mem.save(member);
        }
    }
    //회원조회
    @Override
    public Member findMember(Long id) {
        Member member = mem.findById(id);
        return member;
    }
}
