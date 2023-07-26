package test02;

public class School {
    private static School instance;
    private School(){} // 생성자 비공개 생성은 getInstance 로만 가능
    public static School getInstance(){ // 전역 있으면 반환 없으면 생성후 반환
        if( instance == null) {         // 이유는 메모리 절약, 비용절감
            instance = new School();
            return instance;
        }else {
            return instance;
        }
    }
    public static void main(String[] args) {
        School 학교1 = School.getInstance();
        School 학교2 = School.getInstance();

        System.out.println(학교1);
        System.out.println(학교2);

    }
}

