// setInterval(function(){},1000)
// button.addEventListener('click',function(){

// })

function add(a,b,callback){
    var result = a + b;
    callback(result);
}

add(10,5,function(result){
    document.write("파라미터로 콜백함수 호출됨 <br>");
    document.write("더하기 결과 : " + result);
    console.log("결과 : %d",result);
})

// 함수를 리턴하는경우 (내부함수)
function mul(a,b){
    var result = a * b;
    var output = function(){
        return`${a} * ${b} = ${result}`;
    }
    return output;
}
var out = mul(5,6); // 외부함수호출
document.write("<br>");
document.write(out);
var out = mul(5,6)(); // 내부함수호출
document.write("<br>");
document.write(out);

// 클로저를 사용하지 않은 예
function fncCount(){
    var count = 0;
    count++;
    return count;
}
var counter = fncCount();
console.log(counter); //1
console.log(counter); //1
console.log(counter); //1
// 모듈화, 은닉화

// 클로저를 사용한 예
function fncCount2(){
    var count = 0;
    function addCount(){
        count++;
        return count;
    }
    return addCount;
}
counter = fncCount2();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3 

// 외부에서 내부변수에 접근가능하다.
// 자바에서 getter, setter 활용
var body = document.querySelector('body');
color = ['red','gold','silver', 'blue', 'brown']

// var i = 0;
// function bgChange(){
//     body.style.background = color[i];
//     i++; // 내부에서 전역변수 변경
//     if(i == 5)
//         i = 0;
// }
var button = document.querySelector('button');
function bgChange(){
    var i = 0
    return function inner(){
    body.style.background = color[i];
    i++; // 내부에서 전역변수 변경
    if(i == 5)
        i = 0;
    }
}
var bgc = bgChange();
button.onclick = bgc;