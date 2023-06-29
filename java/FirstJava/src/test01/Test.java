package test01;

public class Test {
    public static void main(String[] args) {

        Student s1 = new Student();
        System.out.println(s1.studentId);
        int studentId = s1.studentId;
        System.out.println(studentId);
        Order o1 = new Order();
        System.out.println(o1.orderDate);
        Student s2 = new Student(10,"원빈",100,1);
    }
}
class Student {

    int studentId = 100;
    String studentName;
    int majorCode;
    int grade;


    @Override
    public String toString() {
        return "Student{" +
                "studentId=" + studentId +
                ", studentName='" + studentName + '\'' +
                ", majorCode=" + majorCode +
                ", grade=" + grade +
                '}';
    }

    //메소드 오버로딩
    public Student(int studentId, String studentName, int majorCode, int grade){
        this.studentId = studentId;
        this.studentName = studentName;
        this.majorCode = majorCode;
        this.grade = grade;
    }
    public Student(){}
}

// private public protect default;

class Order {

    int orderId;
    String buyerId;
    String sellerId;
    int productId;
    String orderDate = "집집집";
}

class UserInfo {

    String userId;
    String userPassWord;
    String userName;
    String userAddress;
    int phoneNumber;
}

