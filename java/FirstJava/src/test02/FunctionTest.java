package test02;

import java.util.Arrays;

public class FunctionTest {
    public static void main(String[] args) {
        int n1 = 20;
        int n2 = 30;
        int sum = n1 + n2;

        int total = addNum(n1,n2);
        System.out.println(total);
        sayHello("안년하세요");
        int num = calcSum();
        System.out.println("num = " + num);
        int num2 = calcSum(5,20);
        System.out.println("num2 = " + num2);
    }

    private static int calcSum(int a, int b) {
        int sum = 0;
        for (int i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    }

    private static int calcSum() {
        int sum = 0;
        int i;
        for (i = 0; i <= 100; i++) {
            sum += i;
        }
        return sum;
    }
    
    private static void sayHello(String string) {
        System.out.println(string);
    }

    private static int addNum(int n1, int n2) {
        return n1 + n2;
    }
}
