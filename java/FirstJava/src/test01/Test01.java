package test01;

public class Test01 {
    public static void main(String[] args){
        pet dog = new pet("강아지",8);
        pet cat = new pet("고양이",13);
        dog.move();
        cat.move();
        dog.getAge();

        cat.getAge();
    }
    static class pet{
        private String type;
        private int age;
        static int count = 0;
        public pet(String type, int age) {
            this.type = type;
            this.age = age;
        }
        public void move(){
            System.out.println(this.type + "가 움직입니다.");
        }
        public int getAge(){
            System.out.println(this.type + "는 " + this.age + "개월입니다.");
            return this.age;
        }
    }
}