package hello.core.order;

import hello.core.member.Grade;
import hello.core.member.Member;
import hello.core.service.MemberService;
import hello.core.service.MemberServiceImpl;
import hello.core.service.OrderService;
import hello.core.service.OrderServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class OrderServiceTest {

    MemberService mem = new MemberServiceImpl();
    OrderService ord = new OrderServiceImpl();

    @Test
    public void createOrder(){
        mem.join(new Member(0L,"name", Grade.VIP));
        Order order = ord.createOrder(0L,"name",12000);

        Assertions.assertThat(order.getDiscountPrice()).isEqualTo(1200);
    }
}
