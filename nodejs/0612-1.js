// nodejs 기본실습하기
// 프로세스객체
// 노드에서 모듈사용하기
// 내장모듈
// 함수정의 - 기능하나정의
// 함수->모듈->재사용->라이브러리
// 전역변수 window, global
// __filename, __dirname
console.log(__dirname);
console.log(__filename);
//console.log(global);
//process 객체 : 프로세스 정보를 다루는 객체
console.log(process.argv);
console.log(process.argv.length); // 노드 실행, 파일경로 -> 2
console.log('');
console.log('');
console.log('');

process.argv.forEach(function(item,index){
    console.log(index + " : " + item);
});
// argv 프로세스를 실행할때 전달되는 파라미터 정보
console.log('');
console.log('');
console.log('');
console.log(process.env["OS"]);
console.log(process.env["PATH"]);

// 모듈(module)
// 별도의 파일로 분리된 독립된 기능
// exports 전역객체 사용한다.
// import ,require()로 불러온다.