// 수학객체, 숫자객체
// Math, Number

var num = 20;
var str = num.toString();
console.log(num);
console.log(str);
console.log(typeof(num));
console.log(typeof(str));
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(16));
console.log(Math.PI);
// Math.ceil() 올림
console.log(Math.ceil(Math.PI));
// Math.round() 반올림
console.log(Math.round(Math.PI));
// toFixed() 소수점 자릿수
var num2 = 30.12345;
console.log(num2 - num2.toFixed());

// isNaN()
var a = "100";
var b = 100;
console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN("wel"));
console.log(typeof a);
console.log(typeof b);

// Number(), parseInt()
console.log(typeof Number(a));
var margin = "10px";
var margin1 = Number(margin);
var margin2 = parseInt(margin);

console.log(margin1); // NaN
console.log(margin2); // 10

// parseFloat() 부동소수점 변환
var padding = "18.5%"
console.log(parseInt(padding));
console.log(parseFloat(padding));

// Math.random() 0~1 사이의 무작위 숫자
// ceil올림 round반올림 floor내림
// 0~x-1 floor 1~x = ceil 

var 로또 = [];
document.write("<br>");
document.write("이번주 당첨번호 ");
for(var i=0;i<6;i++){
    var num = Math.ceil(Math.random() * 45)
    if(로또.indexOf(num)>=0){
        i--;
        continue;
    }
    로또.push(num);
}
document.write(로또);

var lotto = [];
for (var i=1; i<=45;i++){
    lotto.push(i);
}

Array.prototype.random = function(){
    var index = Math.ceil(this.length * (Math.random())); // 0~44
    return index;
}

document.write("<br>다음주 당첨번호 <br>");
for(var i=0; i<6; i++){
    document.write(lotto.random() + " , ");
}

// Math.max(), Math.min()
var max = Math.max(1,2,3,45,10,4,2);
var min = Math.min(1,2,3,45,10,4,2);
console.log(max,min);

// Math.abs() 절대값 Math.pow(n,m) 제곱 Math.sqrt() 제곱근
console.log(Math.abs(-10));
console.log(Math.pow(2,4));
console.log(Math.sqrt(16));

// String 객체
var str = "welcome to my world";
var str1 = "안녕하세요";
console.log(str.length); // 문자열의 길이
console.log(str1[2]); // 하
str1[4] = "용"; // XXXX
console.log(str1); // 적용안됨
// toUpperCase() toLowerCase();
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// str.indexOf(text)
console.log(str.indexOf("wel")); // 0
console.log(str.indexOf("to"));  // 8

if(str1.indexOf("하") > -1){
    console.log("하가 있습니다.");
}
if(str1.indexOf("핵") > -1){
    console.log("하가 있습니다.");
}
else{
    console.log("글자가 없습니다");
}

// slice(n,m) substring(n,m) substr(n,m)
console.log(str.slice(0,4));
console.log(str);// slice 해도 원본은 변화없다.
var slice = str.slice(3,8);
console.log(slice);
console.log(str.substring(2,5));
console.log(str);
// str.trim() 앞뒤 공백제거
// str.repeat(n) n번 반복

var hello = "hello";
console.log(hello.repeat(3));

// 문자열을 비교
console.log("a" < "c");
console.log("a".codePointAt());
console.log("A".codePointAt());
console.log(String.fromCodePoint(65));

// 금칙어를 조회
if(str.indexOf("성인") > -1){ // 0 -> false null NaN undefined
    console.log("금칙어가 있다");
    console.log(str.indexOf("성인")); // -1
}
var st = "abcde";
console.log(st.indexOf(" ")); 

// Array 객체
// push, pop, unshift, shift, splice
// concat forEach
// indexOf lastIndexOf includes
// find findIndex
// sort reverse
// map filter
// join split

// push() 뒤에 삽입 pop() 뒤에 삭제
var 과일 = ['사과', '배', '귤', '딸기', '바나나'];
var fruit = ['apple', 'strawberry', 'banana', 'cherry', 'tomato'];

console.log(과일);
console.log(과일.push('수박'));
console.log(과일);
console.log(fruit.pop());
console.log(fruit);

// unshift 앞에 삽입 shift 앞에 삭제
console.log(과일);
console.log(과일.unshift('수박'));
console.log(과일);
console.log(fruit.shift());
console.log(fruit);

// splice(n,m) 특정요소 지움
과일.slice(2,2);
console.log(과일);  
과일.splice(2,2);
console.log(과일);
과일.splice(1,1,"방울토마토");
console.log(과일);

var 쓰레기 = fruit.splice(1,1);
console.log(쓰레기);

// slice(n,m)
var 과일 = ['사과', '바나나' , '배', '귤', '딸기', '바나나'];
var fruit = ['apple', 'strawberry', 'banana', 'cherry', 'tomato'];
console.log(과일.slice(1,4));
console.log(과일); // 원본유지됨

// concat 합쳐서 새배열을 반환함
console.log(과일.concat(fruit));
console.log(fruit);
console.log(과일);
var 장바구니 = 과일.concat(fruit);
console.log(장바구니);

//forEach 배열
과일.forEach((item,index)=>{
    console.log(`${index} : ${item}`);
});

// indexOf lastIndexOf
// 앞에서부터검색 뒤에서부터 검색
console.log(과일.indexOf('바나나'));
console.log(과일.lastIndexOf('바나나'));
// includes() 포함하는지 확인
console.log(과일.includes('귤'));
console.log(과일.includes('바보'));

// find() findIndex()
// 찾으면 true 없으면 undefined
var result = 과일.find(function(){

});
var result = 과일.find((item)=>{
    return item == "귤";
});
console.log("== " + result);

var arr = [1,2,3,4,5,6,7,8,9];

var result = arr.find((item)=>{
    return item % 2 == 0;
});

console.log("== " + result);

var user = [
    {name : "원빈1", age : 30},
    {name : "원빈2", age : 10},
    {name : "원빈3", age : 40},
]

var result = user.find((a) =>{
    if(a.age <= 15)
        return true;
    else
        return false;
});

console.log(result);
var result = user.findIndex((a) =>{
    if(a.age <= 15)
        return true;
    else
        return false;
});

console.log(result);

var result = user.filter((a) =>{
    if(a.age >= 40)
        return true;
    else
        return false;
});
console.log(result);
// 찾는값이 있는 true로 반환하고 result에 저장한다.
// 없으면 false를 반환하고 그 다음 요소를 찾는다.

var fruit = ['apple', 'strawberry', 'banana', 'cherry', 'tomato'];
// fruit에서 글자가 6개 이상인 과일명만 추출하시오.
// filter를 사용하자

var result = fruit.filter((a) =>{
    if(a.length >= 6)
        return true;
});
console.log(result);

// forEach함수를 이용해서 fruit의 데이터를 
// <ul> 태그의 <li>태그의 리스트로 삽입해보자
var fruit = ['apple', 'strawberry', 'banana', 'cherry', 'tomato'];

var ul = document.getElementsByTagName('ul')[0];

var output = "<ul>";
fruit.forEach((item,index)=>{
    output += `<li>  ${index} : ${item}  </li>`;
});
output += "</ul>"

document.write(output);

// map 함수를 받아 특정기능을 실행하고 새로운 배열을 반환한다.

var user = [
    {name : "원빈1", age : 30},
    {name : "원빈2", age : 10},
    {name : "원빈3", age : 40},
    {name : "원빈4", age : 5},
];

var user2 = user.map((a,i) => {
    return a.name + "님은 " + a.age + "살입니다";
});
console.log(user);
console.log(user2);

// join, split
var join = 과일.join("-");
document.write(join);
document.write("<br>");
document.write(과일);

var str = "welcome:to:my:world";
var split = str.split(":");
document.write("<br>");
document.write(split);

var str = "welcome to my world";
var split = str.split("");
document.write("<br>");
document.write(split);

// isArray()
console.log(Array.isArray(과일));

// sort() reduce()
var arr = [1,4,6,8,9,2]
arr.sort();
console.log(arr);
arr.sort(function(a,b){
    return b-a;
});

var user = [
    {name : "원빈", age : 30},
    {name : "장동건", age : 10},
    {name : "손흥민", age : 40},
    {name : "유재석", age : 5},
];

user.sort();
document.write("<br>");
console.log(user);
user.sort(function(a,b){
    if(a.age < b.age){
        return -1;
    }
    if(a.age > b.age){
        return 1;
    }
    return 0;
});

document.write("<br>");
console.log(user);