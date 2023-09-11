package hello.login.domain.member;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class Member {

    private Long id;
    @NotEmpty
    private String loginId; //로그인 ID
    @NotEmpty
    private String name; //사용자 이름
    @NotEmpty
    private String password;
}


//@NotNull : NotNull은 말 그대로 null 값만 허용하지 않습니다. 그렇기 때문에 "", " " 가 입력되었을 경우는 허용하게 됩니다.
//@NotEmpty : NotEmpty는 null과 추가로 "" 입력도 허용하지 않습니다. 다만 " " 의 입력은 허용됩니다.
//@NotBlank : NotBlank는 세 가지 어노테이션 중 가장 강도가 강한 것으로 null, "", " " 모두 허용하지 않습니다.
