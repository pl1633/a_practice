package hello.core.filter;

import javax.swing.text.Element;
import java.lang.annotation.*;

@Target(ElementType.TYPE) // 어노테이션으로 선언 할 수있는 타입을 결정
@Retention(RetentionPolicy.RUNTIME) // 어노테이션으로 어느 시점까지 어노테이션의 메모리를 가져갈지 설정
@Documented // 클래스에 특수한 의미를 부여하거나 기능을 주입하기 위한 메타데이터
public @interface MyIncludeComponent {

}
// RetentionPolicy 값을 넘겨주는 것으로 어노테이션의 메모리 보유 범위가 결정됨
