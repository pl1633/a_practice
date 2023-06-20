// var http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write("<h1> welcome to  my HomePage </h1>");
//     res.write("<h1> welcome to  my HomePage </h1>");
//     res.write("<h1> welcome to  my HomePage </h1>");
//     res.write("<h1> welcome to  my HomePage </h1>");
//     res.end();
// }).listen(1337,"127.0.0.1");
// console.log("Server Running at http://127.0.0.1:13337");

// 모듈을 추출한다
var express = require("express");
// 웹서버를 생성
var app = express();
app.use(express.static('public')); // 시작폴더를 지정
// 요청이 왔을때 실행할 함수
// app.use(function(req,res){
//     res.send("<h1>잘못들어오신거같은데요^.^</h1>");
// });

app.all("/a",function(req,res){
    res.send("<h1>Page A.....</h1>");
});
app.all("/b",function(req,res){
    res.send("<h1>Page B.....</h1>");
});
app.all("/c",function(req,res){
    res.send("<h1>Page C.....</h1>");
});
app.all("/error",function(req,res){
    res.send("<h1>에러발생</h1>");
});

app.listen(52273,function(){
    console.log("Sever Running at http://192.168.0.173:52273");
});
