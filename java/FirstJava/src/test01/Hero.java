package test01;

public class Hero extends Person{
    public Hero(String name) {
        this.name = name;
    }

    public void attack() {
        System.out.println(this.getName() + "싸움을 했다.");
    }
}

