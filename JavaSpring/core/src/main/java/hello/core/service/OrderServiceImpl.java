package hello.core.service;

import hello.core.discount.DiscountPolicy;
import hello.core.discount.FixDiscountPolicy;
import hello.core.discount.RateDiscountPolicy;
import hello.core.member.Member;
import hello.core.order.Order;
import hello.core.repository.MemberRepository;
import hello.core.repository.MemoryMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
public class OrderServiceImpl implements OrderService{
    private final MemberRepository mem;
    private final DiscountPolicy dis;


//    public MemberRepository getMemberRepository(){
//        return mem;
//    }

    public OrderServiceImpl(MemberRepository mem, DiscountPolicy dis){
        this.mem = mem;
        this.dis = dis;
    }

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        int discountPrice = dis.discount(mem.findById(memberId),itemPrice);
        return new Order(memberId,itemName,itemPrice,discountPrice);
    }
}
