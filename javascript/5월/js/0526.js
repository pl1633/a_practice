var test = document.getElementById('test');
try{
    console.log("welcome");
    throw "무슨에러인가";
}catch(err){
    test.innerHTML = err.message;
}
test.style.color='red';

// throw 사용자지정 오류를 만든다.
var numBox = document.getElementById('numBox');
var btn = document.getElementById('btn');
var errText = document.getElementById('errText');
btn.addEventListener('click',function(){
    errText.innerHTmL = '';
    var val = numBox.value;
    errText.innerHTML = "welcome" + val;
    try{
        if(val == '') throw "비어있음"
        if(isNaN(val)) throw "숫자가 아닙니다"
        if(val < 1) throw "숫자가 너무 작다"
        if(val > 10) throw "숫자가 너무 크다"
        show = false;
    }catch(err){
        errText.innerHTML = "에러메시지 : " + err;
        show = true;
    }finally{
        if(show) numBox.value = "";
    }
})

var num = 123.123455;
try{
    console.log(num.toFixed(1));
    console.log(num.toPrecision(1)); // RangeError
    num = num + 1; // + num2=>ReferenceError
    // eval("alert(Hello')")  // SyntaxError
    // num.toUpperCase(); // TypeError
    // 고양이.날다()
    // console.log(decodeURI('http://www.daum.net/aaa%%%'));
    // console.log(encodeURI('http://www.daum.net/$$$'));
    console.log(num/0);
}catch(err){
    errText2.innerHTML = err.name + " : " + err.message;
}
// toPrecision 수의 길이를 제한
// toFixed 소수점의 길이를 제한