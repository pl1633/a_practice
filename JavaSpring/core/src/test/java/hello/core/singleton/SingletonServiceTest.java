package hello.core.singleton;

import hello.core.AppConfig;
import hello.core.service.MemberService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import hello.core.singleton.SingletonService;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class SingletonServiceTest {

    @Test
    @DisplayName("싱글톤 테스트")
    public void singletonTest(){
        SingletonService singletonService1 = SingletonService.getInstance();

        SingletonService singletonService2 = SingletonService.getInstance();

        System.out.println("singletonService1 = " + singletonService1);
        System.out.println("singletonService2 = " + singletonService2);

        assertThat(singletonService1).isSameAs(singletonService2);
        singletonService1.logic();
    }
}
