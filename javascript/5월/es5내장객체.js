// Array 객체
// isArray()
// indexOf()
// lastIndexOf()
var arr = [1,2,3,4,5,6,7,8,9,10,11];
console.log(Array.isArray(arr));
console.log(arr.indexOf(4));
console.log(arr.lastIndexOf(4));
// forEach() - for in 반복문과 유사
// map -> 배열에 규칙을 적용해서 새로운 배열을 생성
var out = arr.map((a) => {
    return a*a;
});
console.log(out);
var out = arr.map(a => a*a);
console.log(out);
// 자바 람다식
var sum = 0;
var out = '';
arr.forEach((a,i,arr) =>{
    sum += a;
    out +=`${i} + : ${a} + ${sum} \n`;
});
console.log(out); // 등차수열
// 게시판 페이지 번호
// filter() 조건에 만족하는 요소를 추출
// every() 조건에 모두 만족
// some() 조건에 적어도 하나 만족

var arr2 = arr.filter((a) => {
    return a != 3;
});
console.log(arr2);
// 특정 리스트 항목을 삭제할때 사용할 수 잇다.

var result = arr.some(num =>num>5);
console.log(result);
var result = arr.every(num => num > 10);
console.log(result);

// 확인메소드 -> isArray()
// 탐색메소드 -> indexOf() lastIndexOf()
// 반복메소드 -> forEach(), map()
// 조건메소드 -> filter() every() some()
// 연산메소드 -> reduce(), reduceRight()
// reduce 하나가 될때까지 왼쪽에서 계쏙 묶음
var out = '';
arr.reduce((pre,cur,i,arr) => {
    out += `${i} => ${pre} : ${cur}\n`;
    return pre + cur;
});
console.log(out);

// ES5 JSON 객체
// JSON.stringify() 객체를 JSON문자열로 변환
// JSON.parse() JSON문자열을자바스크립트 객체로 변환
var 고양이 = {
    이름 : "냐옹이",
    나이 : "2살"
}
console.log(고양이);
console.log(JSON.stringify(고양이));
console.log(JSON.parse(JSON.stringify(고양이)));

// 객체를 배열로 변환하기
// 고전적인 방법
var str = {
    name1 : "강감찬",
    name2 : "이순신",
    name3 : "세종대왕"
}
var strArr = [];
for(var key in str){
    if(str.hasOwnProperty(key)){ // key값이 존재하는지 체크
        strArr.push(key);
    }
}
console.log(strArr); // key를 

var strArr = [];
for(var key in str){
    if(str.hasOwnProperty(key)){ // key값이 존재하는지 체크
        strArr.push(str[key]);
    }
}
console.log(strArr); // value를 배열로

// ES5 Object.keys() Object.values()
var 이름 = Object.keys(str);
console.log(이름);
var 값 = Object.values(str);
console.log(값);

var 배열 = Object.keys(str).map(item=>str[item]);
console.log(배열);

// Object.entries() fromEntries()
var entry = Object.entries(str); // 배열로
console.log(entry);
var entry = Object.fromEntries(entry); // 객체로
console.log(entry);

var JSON1 = JSON.stringify(entry);
console.log(JSON1);
var JSON2 = JSON.parse(JSON1);
console.log(JSON2);

// ES5 String객체
// trim() 공백제거

// Object 객체들
// Object.defineProper() 속성추가
// Object.defineProperties() 속성들추가
// Object.create() 객체생성
// Object.preventExtensions() 속성추가제한
// Object.isExtensible() 속성추가가능여부
// Object.seal()  속성삭제제한
// Object.isSealed() 속성제거가능여부
// Object.freeze() 속성삭제한
// Object.isFrozen() 속성제거 가능여부
// Object.keys() 속성을 배열로
// Object.values() 속성값을 배열로
// Object.getOwnPropertyNames() 모든속성을 배열로
// Object.getOwnPropertyDescriptor() 모든속성을 옵션 객체로

// 객체옵션속성
// value 값
// writeable 변경가능여부
// get, set
// configurable 설정변경여부
// enumearble 반복문 검사여부

var heros = {};
Object.defineProperty(heros,"name",{
    value: "수퍼맨",
    writable: false,
    enumerable: false,
    configurable: true
});
console.log(heros);
heros.name = "아이언맨";
console.log(heros);

for (var i in heros){
    console.log(heros[i]);
}
var value = "아이언맨";
Object.defineProperty(heros,"name",{
    get : function(){
        return value;
    },
    set : function(newValue){
        value = newValue;
    }
});
console.log(heros.name);
// 자동으로 게터와 세터를 실행한다. 캡슐화 은닉화

Object.defineProperties(heros,{
    name: {value:"토르"},
    regin: {value : "아스가르드"},
});
console.log(heros);

var hero2 = Object.create({},{
    name:{value:"배트맨"},
    skill :  {value:"마스크"}
});
console.log(hero2);
hero2.age = "40";
console.log(hero2);
Object.preventExtensions(hero2);
hero2.asdf = "asdf";
console.log(hero2);
console.log(Object.isExtensible(hero2));
hero2.skill2 = "날아간다";
console.log(hero2);

var hero3 = {};
var hero3= Object.assign(hero3,hero2);
var hero3 = Object.defineProperty(hero3,"skill2",{
    value:"fly..."
});
// seal() , freeze()
console.log(hero3);
// Object.seal(hero2);
console.log(Object.isSealed(hero2));
delete hero2.name;
console.log(hero2);

// Object.keys() Object.values()
// Object.getOwnPropertyNames() 속성을 배열로
// Object.getOwnPropertyDescriptor() 옵션 값 추출
 
console.log(Object.getOwnPropertyNames(hero2));
console.log(Object.getOwnPropertyDescriptor(hero2,"name"));