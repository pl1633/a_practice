package hello.core.member;

import hello.core.AutoAppConfig;
import hello.core.service.MemberService;
import hello.core.service.MemberServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MemberApp {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AutoAppConfig.class);
        MemberService memberService = applicationContext.getBean("MemberService",MemberService.class);

        Member member = new Member(1L,"memberA",Grade.VIP);

        memberService.join(member);

        Member findmember = memberService.findMember(member.getId());

        System.out.println("new member : " + member.getName());
        System.out.println("find member : " + findmember.getName());
    }
}
