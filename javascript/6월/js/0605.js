// this를 지정할 수 있다.

var person1 = {
    name : "이순신",
}
var person2 = {
    name : "강감찬",
}
function showName(){
    console.log(this.name);
}
showName(); // this = window
showName.call(person1);
// this를 binding 처리하였다
// call메서드는 모든 함수에 사용할 수 있다.
showName.call(person2);

function update(생일,주소){
    this.생일 = 생일;
    this.주소 = 주소;
}
update.call(person1,2000,"서울");
console.log(person1);
update.call(person2,1000,"강원");
console.log(person2);

// apply() -> array 써야됨
var num = [4,10,5,3,2];
var 최소 = Math.min(...num); // spread 연산자
var 최대 = Math.max(...num);
console.log(최소);
console.log(최대);

var 최소 = Math.min.apply(null,num);
var 최대 = Math.max.apply(null,num);
console.log(최소);
console.log(최대);
// apply는 배열을 받는다.

// bind() 메소드는 함수의 this값을 영구히 바꿀 수 있다.
var person3 = update.bind(person1);
person3(1999,"부산");
console.log(person1);

var user = {
    name : "을지문덕",
    showName : function(){
        console.log(`Hello, ${this.name}`);
    }
}
user.showName();
var fn = user.showName;
fn();
fn.call(user);
fn.apply(user);

var binding = fn.bind(user);
binding();

// Class 문법
// ES5 -> ES6에 추가된 스펙
var User = function(name,age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name + " : " + this.age);
    }
}

class User2{
    // 생성자 함수
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name + " : " + this.age);
    }
}
var 학생2 = new User2("세종대왕",40);
console.log(학생2);
학생2.showName();
// new를 통해 호출, 생성자함수와 동일하다
// 클래스내부에 constructor라는 객체를 만들어주는
// 생성자 메소드가 있다.
// 생성자는 return값이 없다.
// 학생1에는 showName이 객체내부에 있고
// 학생2에는 showName이 Prototype에 있다.
// 프로토타입은 공유메모리 영역에 있다.

User.prototype.showName = function(){
    console.log("프로토타입호출 : " + console.log(this.name));
}
학생2.showName();

var User3 = function(name,age){
    this.name = name;
    this.age = age;
}
User3.prototype.showName = function(){
    console.log("프로토타입 호출 : " + this.name);
}
var 학생4 = new User3("강감찬",20);

학생4.showName();

// new를 사용하지 않으면 undefined가 나온다.
// class는 new없이 실행X

for(var i in person1){
    console.log(i);
}
for(var i in person2){
    console.log(i);
}
////////////////////////////////////////////
class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("운전한다...");
    }
    stop(){

        console.log("정지한다...");
    }
}

class Bmw extends Car{
    constructor(color){
        this.navi = 1;
        super(color); // 부모도 호출해야댐
    }
    park(){
        console.log("주차한다...");
    }
    drive(){
        console.log("driving...");
    }
    stop(){
        super.stop();
        console.log("stop...");
    }
}

var car1 = new Bmw("blue");
console.log(car1);
car1.drive();
car1.stop();
car1.park();
// 메소드 오버라이딩 : 부모의 메소드를 재정의하는 기법
// 오버로딩은 메소드의 이름은 같으나 매개변수가 서로 다른 것

// 생성자 오버라이딩
// 자식생성자는 무조건 부모생성자를 호출해야한다.
// super를 이용해 호출한다.