package hello.core.repository;

import hello.core.member.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
public class MemoryMemberRepository implements MemberRepository{
    private static HashMap<Long,Member> memberList = new HashMap<>();

    @Override
    public void save(Member member) {
        memberList.put(member.getId(),member);
    }

    @Override
    public Member findById(Long memberId) {
        return memberList.get(memberId);
    }
}
