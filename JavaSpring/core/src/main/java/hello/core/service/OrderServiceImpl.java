package hello.core.service;

import hello.core.discount.DiscountPolicy;
import hello.core.discount.FixDiscountPolicy;
import hello.core.discount.RateDiscountPolicy;
import hello.core.member.Member;
import hello.core.order.Order;
import hello.core.repository.MemberRepository;
import hello.core.repository.MemoryMemberRepository;

public class OrderServiceImpl implements OrderService{
    private final MemberRepository mem = new MemoryMemberRepository();
    private final DiscountPolicy dis = new RateDiscountPolicy();

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        int discountPrice = dis.discount(mem.findById(memberId),itemPrice);
        return new Order(memberId,itemName,itemPrice,discountPrice);
    }
}
