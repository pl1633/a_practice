// 노드의 기본기능알아보기
// 노드의 기본기능 알아보기
// 주소문자열과 요청파라미터
// 이벤트다루기
// 파일다루기
// 로그파일남기기
// url 모듈
// parse() 주소문자열을 URL객체로
// format() URL객체를 주소문자열로

var url = require("url");
var curURL = new URL("https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=2&acq=nodejs+&qdt=0&ie=utf8&query=Nodejs+Course");
var cuStr = url.format(curURL);

// querystring 모듈
// parse() stringify() => 옛날거임 searchParams 사용 권장

// var param = curURL.searchParams.getAll();
// console.log(param);

// 이벤트 보내고 받기
// 비동기방식으로 데이터를 한쪽에서 다른쪽으로 전달한다.
// emit으로 보내고 다른쪽에서 리스너를 등록해서 on으로받는다.

process.on("exit",function(){
    console.log("exti 이벤트 발생함");
});
setTimeout(function(){
    console.log("2초 뒤에 시스템 종료시도함"); // 2초 비동기 시작
},2000);

var Calc = require("./calc3");
var calc = new Calc();
calc.emit("stop") // 1.calc에 stop이벤트가 전달됨 -> calc내부에서 설정된
                    // 함수에서 Calc에 stop event전달됨 출력
console.log(Calc.title, "에 에러 이벤트 전달함");
console.log(calc.add(5,5));