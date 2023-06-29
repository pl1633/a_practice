package test01;

public class PersonTest {
    public static void main(String[] args) {
        Person 사람1 = new Person();
        System.out.println(사람1);
        Person 사람2 = new Person("김원빈",30);
        System.out.println(사람2);
        System.out.println(사람2.toString());

        Hero hero = new Hero("슈퍼맨");
        Hero hero2 = new Hero("배트맨");
        hero.attack();

    }
}
