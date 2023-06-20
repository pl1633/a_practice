// 형변환
// String() 문자로 변환
// Number() 숫자로 변환
// Boolean() 불린형으로 변환
// parseInt() 정수로 변환

// const 수학= Number(prompt("수학몇점?"));
// const 영어= Number(prompt("영어몇점?"));
// const 결과 = (수학 + 영어)/2;
// console.log(결과);

var 수학1 = 80;
var 영어1 = 100;
var 결과1 = (수학1 + 영어1) / 2;
console.log(결과1);

console.log(typeof 수학1);
var 수학 = String(수학1);
console.log(typeof 수학);

var num = '1000'; // 문자
var num1 = 1000; // 숫자
console.log(num/2); // 자동형변환 '1000'/2
console.log(num1/2);

// 문자형을 나누면 숫자형으로 자동형변환이 이루어진다.

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("welcome")); // true
console.log(Boolean(null)); // false 빈문자열
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('0')); // true
console.log(Boolean(' ')); // true 공백

// 연산자
var num = 2**3;
console.log(num);

//복합대입 연산자
var num1 = 10
num1 = num1 + 5;
console.log(num1);

num1 +=10;
console.log(num1);
num1 -=5;
num1 *=2;
num1 /=2;

console.time("시작");
    num1 = num1 + 10;
console.timeEnd("시작");

console.time("시작");
    num1+=10;
console.timeEnd("시작");

// 동등연산자, 동치연산자
// 값만 비교, 값과 타입을 비교

var a = 1;
var b = '1';
console.log(a==b); // true
console.log(a===b); // false

// 비교연산자
// > < >= <= !=(not)

// 조건문
var age=20;
if(age>19){
    console.log("환영합니다");
}
if(age<19){
    console.log("안녕히가세요");
}

// if, else, else if
if(age>19){
    console.log("환영합니다");
}
else if(age == 19){
    console.log("19살입니다");
}
else{
    console.log("미셩년입니다");
}

//사과있으면 사과사오고, 양파, 마늘도 사와
// 사과없으면 -> 나머지 시장을 안본다.

//논리연산자, 비교연산자, 삼항연산자, 짧은조건연산자
//AND(&&), OR(||), !(NOT)

var a = 100;
var b = 200;
var c = true;
var d = false;

console.log(c && d);
console.log(c || d);

// or는 하나만 참이면 결과가 참
// and는 하나만 거짓이면 결과가 거짓
// 스티브잡스는 한국인이거나 남자다이다 -> 참
// 스티브잡슨는 한국인이고 남자이다 -> 거짓

console.log(a>b);
console.log(!(a>b));

var 성별 = "남성";
var 이름 = "마이크";
var 성인 = true;

// 남자이고, 이름이 마이크이거나 성인이면 통과
if(성별 == "남성" && (이름 == "마이크" || 이름 == "성인"))
    console.log("통과");
else
    console.log("입장불가");

// 연산자우선순위 (a + b) * c a+b*c

// 삼항연산자 ? 을 이용한 조건
// 조건식 ? 실행문1 : 실행문2
// 조건식이 참이면 실행문1이 실행되고 거짓이면 실행문2가 실행된다.

var html = "html5";

if(html=="html5")
    console.log("javascript");
else
    console.log("css");

var result = html == "html5" ? "javascript" : "css";

console.log(result);

// 짧은 조건문
// A || B A가 거짓일때 B가 실행된다.
// A && B A가 참이면 B가 실행된다.

var str1="welcome";
console.log(true || str1) ; // true 
console.log(false || str1) ; // welcome
console.log(true && str1) ; // welcome
console.log(false && str1) ; // false

function 과일(name,count){
    var count = count || 1; // 기본값 1로 지정
    console.log(name + "이" + count + "개입니다.");
}

//함수 호출
과일("수박");
과일("사과",7);
// 오버로딩

// if(count == undefined){
//    count = 1;
//}

//debugger;
//반복문
// 동일한 작업을 여러번 반복
for(var i = 0; i < 10; i++){
console.log(i);
}
console.log("for문 끝난후 : " + i);

// 디버깅모드 -> f5 감시 f11

//while
var i = 0;
while(i<10){
    console.log(i);
    i++;
}

//예시1
var input = 10;
switch(input % 2){
    case 0: console.log("짝수입니다");
    break;
    case 1: console.log("홀수입니다");
    break;
    default : console.log("숫자가 아닙니다");
}


//prompt로 네이버, 다음, 구글을 입력하면
//해당사이트로 링크되게 해보자. switch문 활용

var site = prompt("가고싶은 포탈사이트?");
var url;
switch(site){
    case "네이버":
        url = "http://www.naver.com"; break;
    case "다음":
        url = "http://www.daum.net"; break;
    case  "구글":
        url = "http://www.google.com"; break;
    default:
    console.log("없는 사이트 입니다"); break;
}
if(url) location.href=url;