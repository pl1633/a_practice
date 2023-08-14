package hello.core.member;

import hello.core.service.MemberService;
import hello.core.service.MemberServiceImpl;

public class MemberApp {
    public static void main(String[] args) {
        MemberService memberService = new MemberServiceImpl();

        Member member = new Member(1L,"memberA",Grade.VIP);

        memberService.join(member);

        Member findmember = memberService.findMember(member.getId());

        System.out.println("new member : " + member.getName());
        System.out.println("find member : " + findmember.getName());
    }
}
