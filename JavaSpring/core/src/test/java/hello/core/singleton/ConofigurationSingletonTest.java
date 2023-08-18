package hello.core.singleton;

import hello.core.AppConfig;
import hello.core.repository.MemberRepository;
import hello.core.service.MemberServiceImpl;
import hello.core.service.OrderServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class ConofigurationSingletonTest {

    @Test
    void configurationTest(){
        ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);

        MemberServiceImpl memberService = ac.getBean("MemberService",MemberServiceImpl.class);
        OrderServiceImpl orderService = ac.getBean("OrderService", OrderServiceImpl.class);
        MemberRepository memberRepository = ac.getBean("MemberRepository",MemberRepository.class);

        System.out.println(memberService.getMemberRepository());
//        System.out.println(orderService.getMemberRepository());
        System.out.println(memberRepository);
    }

    @Test
    void configurationDeep(){
        ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);
        AppConfig bean = ac.getBean(AppConfig.class);
        System.out.println(bean.getClass());
    }
}
