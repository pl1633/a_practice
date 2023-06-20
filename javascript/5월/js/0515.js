// javascript basic

// 변수 메모리공간에 하나의 저장공간이 생긴다.
var name="홍길동";
var age;
age=30;

//변수는 선언을 하고,
//그 변수에 값을 할당해야한다.
//할당하지 않으면 undefined;
document.write("<h2>name</h2>");
document.write("<h2>" + name + "</h2>");
document.write("<h2>" + age + "살<h2>");

document.write(`<h2>${name}은 ${age}살입니다</h2>`)
// ` -> 빽틱 ESC 밑에 ~ ${변수명}
// 문자는 따옴표, 쌍따옴표, 홋따옴표로 감싼다.

var age=40;

var 이름;
document.write(이름);
이름="장동건";
document.write(이름);
이름="원빈";
document.write(이름);
console.log(이름);

// let 과 const

let name1="Mike";
console.log(name1);
name1 = "Tomson";
console.log(name1);
let name2 = "마이클";
// let으로 선언된 변수명은 중복사용할수없다.
// let과 var은 스코프 scope - 렉시컬환경, 영역
// const 상수 : 절대로 바뀌지 않는 변수
const 생일 = "2010-10-01";
console.log(생일);
// 생일 = "2010-10-10";
console.log(생일);

// 자바 -> final
// 변수선언할때 변하지 않는 값은 const
// 변할수 있는 값은 var와 let
// let은 이름이 중복되면 에러가발생한다.
// var는 중복되도 사용가능
// 변수이름의 첫글자는 숫자가 될 수 없다.
// 변수이름은 예약어로 사용할 수 없다.
// 가급적 상수는 대문자로 사용한다.
// 변수명은 읽기 쉽고 이해할수있게 선언한다.
// 문자와 숫자, &와 _만 사용가능하다.

var BIRTHDAY = new Date();
console.log(BIRTHDAY.toLocaleTimeString());

let $aaa_=300;

let msg="I'm a boy";
console.log(msg);
let msg2 = "I\m a boy";
console.log(msg2);
let msg3 = `My name is ${name}`;
console.log(msg3);
let msg4 = `나는 ${30+1}살 입니다`;
console.log(msg4);

// 숫자 Number, 문자 String
// 더하기, 빼기, 곱하기, 나누기, 나머지
// + - * / %

console.log(name/2); // NaN Not a Number
console.log(이름*2);
console.log(이름 + 10);
console.log(이름 - 10); //NaN

// + 더하기기능, 문자와 연결연산자 기능
// Boolean 불리언 - 참, 거짓
// 불대수-논리학
let a = true;
let b = false;
console.log(a==b);
// == 등가연산, ===동치연산자(일치연산자)
console.log(10>5);
console.log(name == "홍길동");

// 프로그래머 아내
// 남편 프로그래머
// 만약에 가게에 가서 여자가 있거나 이쁘면 가지마.
// if(여자 || 이쁘다){
//     //실행
// }

// typeof 연산자
console.log(typeof 3);
// string, number, undefined, NaN
// null 존재하지 않는 값
// undefined는 초기화하지 않는 자료형

var age=null;

function add(){

}
console.log(typeof add);

var 고양이={}
console.log(typeof 고양이);

console.log(100 + "hi");

// 문장과 표현식
// statement와 expression
// var a=10; statement
// 4 + 10; expression

//대화상자
//alert 경고창
//propt 입력받는 창
//confirm 확인받는창

var 별명=prompt("별명을 입력하세요","한글로");
console.log("환영합니다" + 별명 + "님");

var 성인 = confirm("당신은 성인입니까");


if(성인==true){
console.log("당신은 성인이군요");
}
else{
    console.log("당신은 아직 미성년자이군요");
}

//prompt에서 취소누르면 null값이 출력된다.
// = 대입연산자
//  a = 3 a라는 변수에 3을 대입하라.
// ==, ===

