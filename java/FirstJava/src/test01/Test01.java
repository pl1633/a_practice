package test01;

public class Test01 {
    public static void main(String[] args){
        System.out.println("welcome to my world");
        System.out.println(100);
        System.out.println(100 + 200);
        int x = 30;
        System.out.println(x);
        System.out.println(x + 20);
        x = 300;
        System.out.println(x);
        final int y=500; // 상수선언
        System.out.println(y);
        // y = 600; 에러발생
        System.out.println(y);
        // 정수
        int num = 30;
        long 롱 = 30L;
        short s = 100;
        byte 바이트 = 127;

        double dd = 3000.00;
        float ff = 30.0f;
        System.out.println(num);
        System.out.println(롱);

        boolean isMaried = true;
        System.out.println(isMaried);

        char c = 'a';
        char cc = '한';

        System.out.printf("%c,%c", c, cc);
        String str = "welcome 여러 글자";
        System.out.println("asdf" + "asdf" + isMaried + num);

        int 정수1 = (int)30L;
        long 롱2 = 30;

        double ddd = 30.0;
        float fff = 30.0f;

        char aaa = 65;
        System.out.println(aaa);

        // boolean - 1바이트  short - 2바이트 double - 8바이트
        // char - 2바이트  long - 8바이트
        // byte - 1바이트 float - 4바이트

        String str2 = String.format("내이름은 %s이고 나이는 %d이고 키는%.2fcm입니다.","이순신",20,190.5f);
        System.out.println(str2);

    }
}
