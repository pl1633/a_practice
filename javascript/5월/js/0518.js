// Object 객체 사용하기

// 객체를 정의

var man = {
    name:"SONNY",
    age:31,
}
console.log(man);
console.log(man.name);
console.log(man.age);
console.log(man['name']); // computed property
// name -> key, "SONNY" -> value

// 객체에 속성을추가
man.gender="male";
man['hat'] = 31;
console.log(man);

//for~in 반복문
for(key in man){
    document.write(key+" ");
    document.write(man[key]);
    document.write("<br>");
    console.log(`${key} : ${man[key]}`);
}

// 프로퍼티의 존재여부확인
console.log('age' in man);

//속성삭제 -> delete
delete man.hat;
console.log(man);
console.log('hat' in man);

var man = {
    name: "SONNY",
    age : 31,
    name2 : "원빈"
}
console.log(man['name' + '2']); //계산된 속성
// computed property
// man.name2 man['name2']
// man.name+2 XXXX

// Object 단축 프로퍼티
var girl="원더걸스";
var age=50;

var woman = {
    girl,
    age,
    gender : "여성"
}
console.log(woman);

// 키이름과 value명이 같은 경우에는 하나만 적어도 된다

// 생성자함수를 통한 객체생성
function Student (name, age){
    return{
        name,
        age,
        취미 : "농구"
    }
}

var 학생1 = Student('장동건', 27);
console.log(학생1);

학생2 = {
    name:'원빈',
    age : 30
}
console.log(학생2);
var 학생3 = new Student('이정재',40);
console.log(학생3);

// 메소드 : 객체에 프로퍼티로 할당된 함수

var spiderMan = {
    name : "거미",
    age : 20,
    fly : function(){
        console.log(this.name + " 파닥파닥");
    }
}
spiderMan.fly();

var superMan = {
    name : "수퍼맨",
    age : 22,
    fly : function(){
        console.log(this.name + " 슈우웅");
    }
}
superMan.fly();
// 화살표 함수에서 this는 사용하지 말자
var ironMan = {
    name : "아이언맨",
    age : 32,
    fly : function(){
        console.log("I'm "+this.name);
        console.log(this);
    }
}
ironMan.fly();  

// 화살표함수는 일반함수와는 달리 자신만의 this를 갖지 않는다.
// 여기서 this는 글로벌변수 -> window를 나타낸다.
// 내공외제스자 우논시절통순기
// nodes.js -> global 전역객체

superMan = ironMan;

console.log(superMan.name);
console.log(ironMan.name);

console.log(superMan.name);
superMan.fly();
ironMan.fly();

function add(x,y){
    return x+y;
}
console.log(add(3,5));

// 익명함수
var add = function(x,y){
    return x+y;
}
document.write("<h2>" + add(5,8) + "</h2>");

//이름이 같으면 익명함수가 호출된다.

//화살표함수
var add=(x,y)=>{
    document.write("화살표함수 호출됨");
    return x+y;
}
document.write("<h2>" +add(5,28) + "</h2>");

// 함수선언하면 호이스팅되면서 스택영역에 보관되고
// 함수호출해야 call stack 사용가능하다.
// function으로 선언 -> 함수();
// 함수는 실행하고 끝나면 바로 메모리(스택)에서 제거된다.

// 함수를 생성하고 곧바로 호출하기
// 익명함수를 사용한다.

var add =(function(x,y){
    document.write("익명함수로 바로 호출하고 제거됨");
    document.write("<h2>" +(x+y) + "</h2>");
})(5,9);

//console.log(add(5,3)); add는 함수가 아닙니다.

var add =((x,y)=>{
    document.write("익명함수로 바로 호출하고 제거됨");
    document.write("<h2>" +(x+y) + "</h2>");
})(5,9);

// 리턴값이 있는 화살표 함수
var text = function(txt,count){
    return txt.repeat(count);
}
console.log(text("wel",3));
document.write("<h2>" + text("wel",5) + "</h2>");

var text = (txt,count)=>(txt.repeat(count));
document.write("<h2>" + text("wel",5) + "</h2>");

var 과일 = ['사과', '바나나', '오렌지', '귤'];
var avengers = ['아이언맨', '토르', '스파이더맨', '캡틴'];
var 아이언맨 = {
    name: "토니 스타크",
    age: 50,
    color: "골드"
}

// 함수의 매개변수가 배열인경우
function myFunc(배열){
    for(var i of 배열){
        document.write(i + " ");
    }
    document.write("<hr>");
}
myFunc(과일);
myFunc(avengers);

// 함수의 매개변수가 객체인 경우
function myFunc1(객체){
    for(var i in 객체){
        document.write(객체[i] + " ");
    }
    document.write("<hr>");
}

myFunc1(아이언맨);

// 가변인자함수
// ...args
function 어벤져스(...영웅){
    for(var i =0; i<영웅.length;i++){
        document.write(영웅[i] + " ");
    }
    document.write("<hr>");
}
어벤져스("토리","철맨","블랙","캡틴");
어벤져스("토리","철맨","블랙","캡틴","병신","머저리");

// iterable 객체
// 반복가능한 객체
// for ~of
// for in
// forEach(); map(), filter(),
// 배열.forEach() 객체X

과일.forEach(function(ele,index,array){
    document.write("ele =" + ele + "<br>");
    document.write("index =" + index + "<br>");
    document.write("array =" + array + "<br>");
    document.write("<hr>");
});

function 시장보기(ele,index,array){
    document.write("ele =" + ele + "<br>");
    document.write("index =" + index + "<br>");
    document.write("array =" + array + "<br>");
    document.write("<hr>");
}

과일.forEach(시장보기);
// 함수가 매개변수로 들어갈때는 소괄호()를 제거한다.
// 과일.forEach(시장보기()); 에러발생

var obj={
    '+' : '더하기',
    '-' : '빼기',
    '/' : '나누기',
    '*' : '곱하기',
    '%' : '나머지'
}

// console.log(obj.+); 에러발생
console.log(obj['+']); //키이름이 특수문자 인 경우 사용

var myCar={
    model:"그랜져",
    speed:60,
    color:"black",
    break:function(){
        this.speed -= 10;

    },
    accel:function(){
        this.speed += 10;
    }
}

console.log(myCar.accel());
console.log(myCar.speed);
console.log(myCar.accel());
console.log(myCar.speed);
console.log(myCar.break());
console.log(myCar.speed);
console.log(myCar.break());
console.log(myCar.speed);
myCar.speed = 100;
console.log(myCar.speed);

// 은닉화, 캡슐화, getter, setter 클로져
