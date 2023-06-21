// 모듈 추출한다.
var mysql = require("mysql");
var express = require("express");
var bodyParser = require('body-parser');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user:'root',
    password:'1234',
    database:'college'
});
// 혹은 client.query('use company');

// 웹서버를 생성한다.
var app = express();
app.use(express.static('public'));
// post요청시 파라미터 전달
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 라우터 설정
app.get('/students',function(req,res){ // 전체조회
    var sql = "SELECT * FROM students;";
    client.query(sql,function(err,result){
        if(err) console.log(err);
        res.send(result);
    })
}); 
app.get('/students/:id',function(req,res){ // 개별조회
    var id = req.params.id || req.body.id;
    var sql = "SELECT * FROM students where id ='" + id + "'";
    client.query(sql,function(err,result){
        if(err) console.log(err);
        res.send(result);
    })
});

app.post('/students',function(req,res){ // 생성
    var id = req.body.id;
    var name = req.body.name;
    var pw = req.body.password;
    var email = req.body.email;
    var gender = req.body.gender;
    var data = {id,name,pw,email,gender};
    console.log(data);

    // DB연동
    var sql = "INSERT into students (id,name,password,email,gender) value (?,?,?,?,?);"
    client.query(sql,[id,name,pw,email,gender],function(err,result){
        if(err) console.log(err);
        // res.send(result);
        res.redirect("member_ok.html");
    });
});


app.put('/students',function(req,res){  // 수정 put,patch
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.password);
    console.log(req.body.email);
    console.log(req.body.gender);
    var query = 'UPDATE students SET name=?,password=?,email=?,gender=? where id = ?';
    client.query(query,[req.body.name,req.body.password,req.body.email,req.body.gender,req.body.id],function(err,result){
        if(err){
            console.log("쿼리문장에 오류가 있습니다");
        }else{
            res.send(result);
        };
    });
});

app.delete('/students/:id',function(req,res){ // 삭제
    var sql = "delete from students where id='" + req.params.id + "'";
    client.query(sql,function(err,result){
        res.send(result);
    });
});

// 웹서버를 실행
app.listen(3000,function(){
    console.log("Sever Running at ..");
    console.log("http://127.0.0.1:3000");
});