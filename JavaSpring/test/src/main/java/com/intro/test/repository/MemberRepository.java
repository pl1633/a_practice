package com.intro.test.repository;

import com.intro.test.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
    void delete(Long id);

    void patch(String name, String password);
}
