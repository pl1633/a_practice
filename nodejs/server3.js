var express = require("express");
// 웹서버를 생성
var app = express();
app.use(express.static('public')); // 시작폴더를 지정

var items = [
    {name:"우유",price:2000},
    {name:"커피",price:1000},
    {name:"홍차",price:3000}
];

// 데이터를 요청해서 화면에 뿌려준다.
app.all("/food",function(req,res){
    var out = "";
    items.forEach((item) => {
        out += "<ul>";
        out += "<li>" + item.name + "</li>";
        out += "<li>" + item.price + "</li>";
        out += "</ul>";
    });
    res.send(out);
});
app.all("/foodjson",function(request,response){
    response.type("application/json");
    response.send(items);
});
app.get("/foodxml",function(request,response){
    var out = "";
    out += '<?xml version="1.0" encoding="utf-8" ?>';
    out += "<products>";
    items.forEach((item) => {
        out += "<product>";
        out += "<name>" + item.name + "</name>";
        out += "<price>" + item.price + "</price>";
        out += "</product>";
    });
    out += "</products>";
    response.type("text/xml");
    response.send(out);
});

app.get("*",(request,response)=>{
    response.status(404);
    response.set('Name','hi').send("<h1>로그인 성공</h1>");
});

app.listen(52273,function(){
    console.log("Sever Running at http://192.168.0.173:52273");
});
