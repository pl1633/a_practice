package test02;

public class CarTest {
    public static void main(String[] args) {
        Car myCar1 = new Car("빨강",0);
        Car myCar2 = new Car("파랑",0);
        Car myCar3 = new Car("노랑",0);

        myCar1.upSpeed(30);
        System.out.println("자동차의 색상은 " + myCar1.color + "이며 현재속도는 " + myCar1.speed + "km 입니다.");

        myCar2.upSpeed(60);
        System.out.println("자동차의 색상은 " + myCar2.color + "이며 현재속도는 " + myCar2.speed + "km 입니다.");

        myCar3.upSpeed(120);
        System.out.println("자동차의 색상은 " + myCar3.color + "이며 현재속도는 " + myCar3.speed + "km 입니다.");
    }
}

class Car{
    String color;
    int speed;

    void upSpeed(int value){
        speed += value;
    }
    void downSpeed(int value){
        speed -= value;
    }


    public Car() {
    }

    public Car(String color, int speed) {
        this.color = color;
        this.speed = speed;
    }
}
