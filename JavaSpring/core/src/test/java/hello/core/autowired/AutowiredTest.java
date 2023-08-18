package hello.core.autowired;

import hello.core.member.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.lang.Nullable;

public class AutowiredTest {

    @Test
    void AutowiredOption(){
        ApplicationContext ac = new AnnotationConfigApplicationContext(TestBean.class);
    }

    static class TestBean{
        //호출안됨
        @Autowired(required = false)
        public void setNoBean1(Member member){
            System.out.println("setNoBean1 + " + member);
        }

        @Autowired(required = false)
        public void setNoBean2(@Nullable Member member){
            System.out.println("setNoBean1 + " + member);
        }
    }
}
