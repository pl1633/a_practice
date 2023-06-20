// 자바스크립트 
// 콜백함수를 파라미터로 전달하기
// 콜백함수 : 함수를 파라미터로 전달했을때 특정시점에
// 그 함수를 실행시켜주는 경우

function add(a,b,callback){
    var result = a + b;
    callback(result);
}

add(20,10,function(result){
    console.log("파라미터 콜백함수");
    console.log("결과 : ",result);
});

// 함수를 반환하고 반환된 함수를 실행하기

function mul(a,b,callback){
    var result = a * b;
    callback(result);
    var history = function(){
        return ' '+ a + ' * ' + b + ' = ' + result;
    };
    return history;
}

var mul_his = mul(8,9,function(result){
    console.log("콜백함수 호출됨");
    console.log("결과 :%d",result);
});

function callback(result){
    console.log("콜백함수 호출됨");
    console.log("결과 :%d",result);
}

var mul_his2 = mul(4,6,callback);

console.log("함수실행결과" + mul_his());

// 반환된 함수에서 함수 내부의 변수접근
// 클로저 closer 종결자

function minus(a,b,callback){
    var result = a - b;
    callback(result);
    var count = 0;
    var history = function(){
        count++;
        return count + ' : ' + a + ' - ' + ' b ' + ' = ' + 'result';
    }
    return history;
}
console.log('');
console.log('');
console.log('');
var minus_his = minus(19,7,function(result){
    console.log("호출됨");
    console.log(result);
});
// console.log(count) => 에러발생

console.log(minus_his());
console.log(minus_his());
console.log(minus_his());
console.log(minus_his());

// 프로토타입 만들고 객체 생성하기
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    // console.log(speed + " km 속도로 걸어간다");
    return speed + " km 속도로 걸어간다";
}
console.log('');
console.log('');
console.log('');
var person1 = new Person("이순신",40);
person1.walk(20);
console.log(`${person1.name}이 ${person1.walk(30)}`);

//bind 사용하기
var calc = {};
calc.hitCount = 0;
calc.add = function(a,b,callback){
    var result = a + b;
    callback(result);
    this.hitCount++;
    console.log(this);
    console.log("add함수 호출됨...");
}

var calculate = function(method,a,b){
    console.log('caculate 호출됨');
    if(method == 'add'){
        calc.add(a,b,onAdd.bind(calc));
    }
}

function onAdd(result){
    console.log('onAdd => ' + this);
    console.log('onAdd 결과 : ' + result, this.hitCount);
}
calculate('add',10,20);