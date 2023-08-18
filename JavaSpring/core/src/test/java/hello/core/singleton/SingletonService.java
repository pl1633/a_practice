package hello.core.singleton;

import hello.core.AppConfig;
import hello.core.service.MemberService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class SingletonService {
    private static final SingletonService instance = new SingletonService();
    
    public static SingletonService getInstance(){
        return instance;
    }
    
    private SingletonService(){}
    
    public void logic(){
        System.out.println("싱글톤 객체 로직 호출");
    }

    @Test
    @DisplayName("스프링 컨테이너와 싱글톤")
    void springContainer(){
        AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);

        MemberService memberService1 = ac.getBean("MemberService", MemberService.class);
        MemberService memberService2 = ac.getBean("MemberService", MemberService.class);

        System.out.println("memberService1 = " + memberService1);
        System.out.println("memberService2 = " + memberService2);

        assertThat(memberService1).isSameAs(memberService2);
    }
}
