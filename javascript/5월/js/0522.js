var 과일 = ["사과","수박"];
let fruit = ['apple', 'melon'];
const day = ['월', '화', '수',];
// 배열은 문자, 숫자, 객체, 함수등을 포함한다.
// 리터럴(literal) - 데이터그자체
// 배열은 요소에 길이 length
// iterable 객체 - 반복가능한 객체
// 인덱스(순번) -> 0번부터 시작
console.log(day.length);

for(var i=0;i<과일.length;i++){
    document.write(`${i} => ${과일[i]} <br>`);
}
document.write("<br>");
for(var i=0;i<fruit.length;i++){
    document.write(i + " : "  + fruit[i] + "<br>");
}
// 배열 API
// push() 배열끝에 요소추가
// pop() 배열 마지막요소 제거
// 스택이라는 메모리
과일.push("귤");
document.write(과일 + "<br>");
과일.push("참외");
document.write(과일 + "<br>");
과일.pop();
document.write(과일 + "<br>");


// 자료구조
// 배열은 순서가 있는 리스트
// 배열앞에 요소를 제거/추가
// unshift() shift()
day.unshift('일');
document.write(day + "<br>");
day.shift('일');
document.write(day + "<br>");
// for ~ in / for ~ of
for(var i of 과일){
    document.write(`${i} `)
}
document.write("<br>");
for(var i in 과일){
    document.write(`${과일[i]} `)
}
document.write("<br>");
fruit.forEach(function(ele,i){
    document.write(`${i} ${ele}<br>`);
});

// 일반변수와 참조변수
var a = 10;
var b = 20;
// 일반변수 : 값을 가지고있는 변수
// a와 b의 값을 바꾸고자 할경우
var c;
c = a;
a = b;
b = c;
console.log(a,b);
// 참조변수 : 주소를 가지고 있는 변수
// 배열선언, 객체선언할때 사용하는 변수
// 과일, fruits, day -> 참조변수
var food = 과일;
console.log(food);
console.log(food == 과일);
food.push("딸기");
console.log(과일);
console.log(food);

// 생성자함수
function Student(name,kor,math,eng,sci){
    this.name = name;
    this.kor = kor;
    this.math = math;
    this.eng = eng;
    this.sci = sci;
}

var 학생1 = new Student("원빈", 50, 50, 30, 40);
var 학생2 = new Student("원빈", 40, 40, 30, 70);
var 학생3 = new Student("원빈", 60, 60, 80, 80);

// 프로토타입 - 공통영역에 메소드를 할당한다. -> 힙(heap)
// -> 메모리 절약
Student.prototype.getSum = function(){
    var sum = this.kor + this.math + this.eng + this.sci;
    return sum;
}
document.write("총점 : " + 학생1.getSum() + "<br>");
Student.prototype.getAvg = function(){
    var sum = this.getSum() / 4;
    return sum;
}
document.write("총점 : " + 학생1.getAvg());

// 자바스크립트 정의
// 프로토타입을 기본으로 하는 함수형 언어
// 함수를 1급 객체로 취급한다.
// 생성자함수는 new 키워드를 사용한다.
// this -> new 생성된 변수 참조변수형 객체를 나타낸다.
// new를 사용하지 않으면 생성자함수의 this -> window를 가르킨다.

// immutable과 mutable
// 일반변수와 참조변수

var obj1 = {
    name : "kim"
}
var obj2 = obj1;
obj2.name = "LEE";
console.log(obj1);

var a1 = 10;
var a2 = a1;
a2 = 20;
console.log(a1);

// 생성자 함수
function Car(model, speed, color){
    var model = model; //필드, 속성
    this.speed = speed;
    var color = color;

    this.getSpeed = function(){
        return this.speed;
    }
    this.setSpeed = function(speed){
        if(speed<0){
            // alert("속도는 음수가 안됩니다");
        }
        else{
        this.speed = speed;
        }
    }
}

var 자동차1 = new Car("그랜저", 60, "블랙");
console.log(자동차1.getSpeed());
자동차1.setSpeed(-100);
console.log(자동차1.speed);
console.log(자동차1.getSpeed());

// 캡슐화 은닉화 getter setter
// 잘못 사용될 수 있는 객체의 특정부분을 사용자가
// 사용할 수 없게 막는 구조

// 프로토타입체인, 상속, 클로저, 콜백

var user = {
    name: "마이클"
}
console.log(user);
var bmw = {
    color: 'red',
    wheel:4,
    drive(){
        console.log("bmw drive..");
    }
}
var audi = {
    color:'blue',
    wheel:4,
    drive(){
        console.log("audi drive..");
    }
}
document.write("<hr>");
// 공통된 부분을 처리하자.
var car = {
    wheel:4,
    drive(name){
        document.write(name + " 운전하다....<br>");
    }
}
var bmw = {
    color: 'red',
}
bmw.__proto__ = car; // 상속
console.log(bmw);
console.log(bmw.color);
console.log(bmw.wheel);
bmw.drive("원빈");

var audi = {
    color: "white",
}
audi.__proto__ = bmw;
audi.drive("장동건");
console.log(audi);
// 프로토타입 체인 prototype메소드가 없으면 bmw에서 찾고
// 또 없으면 car에서 찾는다.

// 원의 면적을 구하는 객체를 생성하기
function Circle(radius){
    this.radius = radius;
    this.getArea = function(){
        var area = this.radius * Math.PI;
        return area;
    }
}
var circle = new Circle(1);
document.write("<hr>");
document.write("원의 면적은 " + circle.getArea() + "<br>");

function Circle2(radius){
    this.radius = radius;
}
Circle2.prototype.getArea = function(){
    var area = this.radius * Math.PI;
    return area;
}

var circle2 = new Circle2(6);
document.write("원의 면적은 " + circle2.getArea() + "<br>");
document.write("circle의 부모는 " + circle2 instanceof Circle2);

function Circle3(r){
    var radius = r; // 캡슐화, 은닉화
    this.getRadius = function(){
        return radius;
    }
    this.setRadius = function(r){
        if(r<0)
            throw "원의 반지름은 양수이어야 합니다"
        else
            radius = r;
    }
    this.toString = function(){
        return "반지름은" + this.getRadius() + "이고 원의둘레는" + this.getLength() + "입니다";
    }
    this.print = function(){
        return `${this.getRadius()} : ${parseInt(this.getLength())}`;
    }
    this.output = function(){
    
    }
}
// 원의 지름을 구하는 프로토타입
Circle3.prototype.getLength = function(){
    return this.getRadius() * 2 * Math.PI;
}
var c3 = new Circle3(3);
c3.setRadius(5);
console.log(c3.getRadius);
console.log(c3.getLength());
console.log(c3 instanceof Circle3);
console.log(c3 instanceof Circle);

this.toString = function(){
    if(r<0)
        throw "원의반지름은 양수이어야 합니다"
    else
        radius = r;
}
// 오버라이딩 메소드 재정의


c4 = new Circle3(5);
document.write("<br>")
c4.setRadius(5);
document.write(c4.toString());
document.write("<br>")
c4.setRadius(5);
document.write(c4.print());

// radius의 값을 가져올때 getRadius로 하자
// this.radius -> radius, getRadius로 하자

// 프로토타입과 상속에 대하여
function Grand(){}
Grand.prototype.재산 = "1억";

var Father = new Grand();
console.log(Father.재산);

Father.재산 = "2억";
document.write(`<h2> ${Father.재산} </h2>`);

function Mama(){}

var 엄마 = new Mama();

Mama.prototype.재산 = "5천만";
document.write(`<h2>엄마재산 ${엄마.재산}</h2>`);

function Son(){}
Son.prototype = new Mama();
var 아들 = new Son();
아들.prototype = 엄마;
document.write(`<h2>아들재산 ${아들.재산} </h2>`);

Mama.prototype.재산 = "5억";
document.write(`<h2>아들재산 ${아들.재산}`);