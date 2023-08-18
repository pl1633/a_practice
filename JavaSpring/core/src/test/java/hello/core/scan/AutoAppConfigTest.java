package hello.core.scan;

import hello.core.discount.RateDiscountPolicy;
import hello.core.repository.MemberRepository;
import hello.core.repository.MemoryMemberRepository;
import hello.core.service.MemberServiceImpl;
import hello.core.service.OrderServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import hello.core.AutoAppConfig;

public class AutoAppConfigTest {

    @Test
    void test1(){
        AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(AutoAppConfig.class);
        MemoryMemberRepository memberRepository = ac.getBean(MemoryMemberRepository.class);
        RateDiscountPolicy rateDiscountPolicy = ac.getBean(RateDiscountPolicy.class);
        MemberServiceImpl memberService = ac.getBean(MemberServiceImpl.class);
        OrderServiceImpl orderService = ac.getBean(OrderServiceImpl.class);
        System.out.println(memberRepository.getClass());
        System.out.println(rateDiscountPolicy.getClass());
        System.out.println(memberService.getClass());
        System.out.println(orderService.getClass());
    }



}
