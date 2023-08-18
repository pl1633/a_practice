package hello.core.order;

import hello.core.AutoAppConfig;
import hello.core.member.Grade;
import hello.core.member.Member;
import hello.core.service.MemberService;
import hello.core.service.MemberServiceImpl;
import hello.core.service.OrderService;
import hello.core.service.OrderServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class OrderApp {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AutoAppConfig.class);
        MemberService member = applicationContext.getBean("MemberService",MemberService.class);
        OrderService orderService = applicationContext.getBean("OrderService",OrderService.class);

        member.join(new Member(0L,"name", Grade.VIP)); // member에 사용할 멤버 넣어줌
        Order order = orderService.createOrder(0L, "name", 12000);


        System.out.println(order.toString());
    }
}
