package com.intro.test.domain;

import lombok.Getter;
import lombok.Setter;

@Getter@Setter
public class Member {
    private Long id;
    private String name;
    private String password; // 추후에 암호화
}
