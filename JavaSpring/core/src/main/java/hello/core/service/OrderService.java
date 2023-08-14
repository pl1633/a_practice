package hello.core.service;

import hello.core.member.Member;
import hello.core.order.Order;

public interface OrderService {
    // 주문 생성
    Order createOrder(Long memberId, String itemName, int itemPrice);
}
