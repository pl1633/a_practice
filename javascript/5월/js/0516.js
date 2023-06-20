// do ~while
var i = 0;
do{
    console.log("먼저실행" + i);
    i++;
}while(i<10)
console.log(i);

// break 반복문을 빠져나옴
// continue 실행을 멈추고 다음 반복을 실행
// return 함수의 끝부분에 선언하며, 리턴문을 만나면 함수는 종료되고
// 그 이후의 값을 반환한다.

// while(true){
//     var answer = confirm("계속할까요?");
//     if(!answer){
//         console.log("while문을 빠져나옴");
//         break;
//     }
// }

// 홀수만 더하기, 짝수만 더하기
console.log("=======================");
var sum=0;
for(var i=0;i<=10;i++){
    if(i%2){
        continue;
    }
    sum = sum + i;
}
console.log(sum);
console.log("=======================");

var sum=0;
for(var i=0;i<=10;i++){
    if(!(i%2)){
        continue;
    }
    sum = sum + i;
}
console.log(sum);
console.log("=======================");

var sum=0;
for(var i=0;i<=100;i++){
    sum += i;
}
console.log("결과 => " + sum);

// 중첩반복문

// i = 0, j => 1~10
// i = 1, j => 1~10

var output="";
for(var i=1; i<=10; i++){
    for(var j=1; j<i+1; j++){
        output += "*";
    }
    output+="<br>";
}
document.write(output);

for(var i=0; i<10; i++){
    var str="★";
    document.write(str.repeat(i)+"<br>")
}

// 구구단 만드는 예제
// for (var i=2; i<=9; i++){
//     document.write(`----${i}단-----<br>`)
//     for(var j=0; j<=9; j++){
//         var sum=i*j;
//         document.write(`${i} * ${j} = ${sum} <br>`);
//     }
// }

// for in 반복문
// for in 객체또는 배열
// for of 반복문
// for of 배열




var 과일 = ["사과", "배", "오렌지", "귤"];

console.log(과일[2]);
console.log(과일.length);

console.time("start");
for (var i in 과일){
    document.write(과일[i] + " ");
}
console.timeEnd("start");

document.write("<hr>");

console.time("start");
for (var i of 과일){
    document.write(i + " ");
}
console.timeEnd("start");

console.time("start");
for(var i=0;i<과일.length;i++){
    document.write(과일[i] + " ");
}
console.timeEnd("start");

// 객체
var 고양이={
    이름 : "나비",
    종류 : "페르시안",
    나이 : 2,
    먹다 : function(음식){
        return 음식+"을 먹고 똥싸다";
    }
};
console.log(고양이.종류);
console.log(고양이.나이);
console.log(고양이['종류']);
console.log(고양이['나이']);
console.log(고양이.먹다("생선"));
var 결과 = 고양이.먹다("고등어");
console.log(결과);
document.write("<br>")
for(var key in 고양이){
    // document.write(i + " : " + 고양이[i] + "<br>")
    if (key != "먹다")
    document.write(key + " : " + 고양이[key] + "<br>");
}
// 키 : 값
// 객체의 행동 -> 메소드       고양이.먹다('생선')

고양이.색 = "검정색";
고양이.크기 = 128;
for (var i in 고양이){
    document.write( i + " : " + 고양이[i] + "<br>");
}

//사람을 정의
//나이는 30살, 이름은 홍길동, 생일은 9월01일
// 사람이 밥을 먹고 소화를 했다.
// 취미는 인터넷 게임

var person = {
    name: "Hong gil dong",
    birthday: new Date(),
    age: 30,
    hobby: "internet game",
    hunger: 30,
    eat(food){
        this.hunger -= 10;
        return this.name + "이" + food + "를 먹고 소화했다";
    }
}
document.write("<br><br>")
document.write(person.hunger + "<br>");
document.write(person.eat("육개장")  + "<br>");
document.write(person.hunger + "<br>");