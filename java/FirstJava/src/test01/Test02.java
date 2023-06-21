package test01;

import java.util.Random;
import java.util.Scanner;

public class Test02 {
    public static void main(String[] args){
        System.out.println(Math.max(19,30));
        System.out.println(Math.min(-50,-40));
        System.out.println(Math.abs(-30));
        System.out.println(Math.PI);

        String str = "100";
        int i = Integer.parseInt(str);
        System.out.println(i);

        Random random = new Random();
        System.out.println(random);
        int rand = random.nextInt(10);
        System.out.println(rand);

        int rand2 = random.nextInt(4) + 5;
        System.out.println(rand2);

        Scanner scanner = new Scanner(System.in);
        System.out.println(scanner);
        String str3 = scanner.next();
        System.out.println(str3);
        int num2 = scanner.nextInt();
        System.out.println(num2);
    }
}
