// window.onload = function(){  }
// load 이벤트이름, 이벤트타입
// onload : 이벤트속성
// 할당된함수 : 이벤트리스너, 이벤트핸들러
// 이벤트연결한다.

// 이벤트관련속성
// onclick, onblur, onfocus, onfocusin, onfocusout, onresize, onscroll...

// 이벤트 모델
// DOM Level 0
// 인라인이벤트모델,기본이벤트모델(고전이벤트)
// 한 객체에 두번이상 적용할 수 없다.
// DOM Level 2
// 표준이벤트모델, 익스플로러이벤트모델
// addEventListner(On=>in jQuery)
// attachEvent

// 익스플로러면 attachEvent를 사용하고
// 그외에는 addEventListner를 사용해라
// 크로스브라우징

// 이벤트제거
header.onclick = function(e){
    console.log(this);
    console.log(e); // e, window.event(고전)
    var event = e || window.event;

    //header.onclick = null; //이벤트 제거
    // for(var key in e){
    //     box.innerHTML = `<p>${key} : ${e[key]} </p>`
    // }
    console.log(e.target); // 자식
    console.log(e.currentTarget); // 부모
}
// 이벤트 강제실행

a.onclick = function(){
    ca.innerHTML = parseInt(ca.innerHTML) + 1;
}
b.onclick = function(){
    cb.innerHTML = parseInt(cb.innerHTML) + 1;
    a.onclick(); // 강제실행
}
// 자동실행
var stop = setInterval(b.onclick,1000);
c.onclick = function(){
    clearInterval(stop);
}
d.onclick = function(){
    stop = setInterval(b.onclick,1000);
}
// 기본이벤트제거
// 이벤트전달제거
// preventDefault()
// stopPropagation()

// 기본이벤트 -> a태그 클릭
// form -> submit
daum.onclick = function(e){
    this.style.background = 'pink';
    e.preventDefault(); // 기본이벤트 제거
    // return false; // 이거도 기본이벤트 제거
}
// href="javascript:void(0)" 이거도 
// daum.addEventListner('click',function(){
//     this.style.background = 'pink';

// });
function naver(){
    naver2.style.background = 'red';
    return false;
}

//한글입력시에만 전송한다.
form.onsubmit = function(e){ // 한글일때만 전송
    var val = name2.value;
    if(val.length == 0){
        console.log("입력하세요");
        return false;
    }
    else if(val.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,"").length==0){
        console.log("if");
        return true; // 다음단계로 실행
    }else{ // 한글아니면 경고 후 지워버림
        console.log("else");
        alert("한글이름을 입력하세요");
        name2.value = "";
        return false;
    }
}   

// 이벤트 버블링 : 자식 -> 부모
// 이벤트 캡쳐링 : 부모 -> 자식
// eventPhase

// html.addEventListener('click',function(e){
//     console.log(e.eventPhase);
// },true);
// body.addEventListener('click',function(e){
//     console.log(e.eventPhase);
// },true);
// field.addEventListener('click',function(e){
//     console.log(e.eventPhase);
// },true);
// button.addEventListener('click',function(e){
//     console.log(e.eventPhase);
// },true);

function handler(e){
    // var phase = ['캡쳐링','타겟','버블링'];
    // console.log(e.target.nodeName,this.nodeName,phase[e.eventPhase-1]);
    console.log(this.nodeName);

}
html.addEventListener('click',handler);
body.addEventListener('click',function(e){
    e.stopPropagation();
});
field.addEventListener('click',handler);
button.addEventListener('click',handler);


// 1 캡처링 2 target 3 버블링
// e.target.nodeName -> e.target 최종자식엘리먼트
// this.nodeName -> e.currentTarget 이벤트가 호출된 엘리먼트

// 이벤트 전달방지
// event.stopPropagation();
// 이벤트 버블링 제거
// 익스플로러 => event.cancelBubble = true

aa.onclick = function(e){
    this.style.background = "gold";
}
p.onclick = function(e){
    this.style.background = "cyan";
    e.stopPropagation();
}
div.onclick = function(){
    this.style.background = "pink";
}
