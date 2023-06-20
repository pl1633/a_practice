// 모듈 추출한다.
var mysql = require("mysql");
var express = require("express");
var bodyParser = require('body-parser');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user:'root',
    password:'1234',
    database:'company'
});
// 혹은 client.query('use company');

// 웹서버를 생성한다.
var app = express();
app.use(express.static('public'));
// post요청시 파라미터 전달
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 라우터 설정
app.get('/products',function(req,res){ // 전체조회
    var query = 'select * from products';
    client.query(query,function(err,result){
        if(err){
            console.log("쿼리문장에 오류가 있습니다");
        }else{
            console.log(result);
            res.send(result);
        }
    });
}); 
app.get('/products/:id',function(req,res){ // 개별조회
    var id = Number(req.params.id);
    var query = 'select * from products where products.id =' + id;
    client.query(query,function(err,result){
        if(err){
            console.log("쿼리문장에 오류가 있습니다");
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
app.post('/products',function(req,res){ // 생성
    var query = 'INSERT into products (name,modelnumber,series) values (?,?,?); ';
    client.query(query,[req.body.name,req.body.modelnumber,req.body.series],function(err,result){
        if(err){
            console.log("쿼리문장에 오류가 있습니다");
        }else{
            console.log("삽입 성공");
            res.send(result);
        }
    });
});
app.put('/products/:id',function(req,res){  // 수정 put,patch
    var query = 'UPDATE products SET name=?,modelnumber=?,series=? where id = ?';
    client.query(query,[req.body.name,req.body.modelnumber,req.body.series,req.params.id],function(err,result){
        if(err){
            console.log("쿼리문장에 오류가 있습니다");
        }else{
            console.log("수정성공");
            res.send(result);
        }
    });
});
app.delete('/products/:id',function(req,res){ // 삭제
    var query = `DELETE from products WHERE id = ?;`;
    client.query(query,[req.params.id],function(err,result){
        if(err){
            console.log("쿼리문장에 오류가 있습니다");
        }else{
            console.log(req.params.id + "번 제거성공");
            res.send(result);
        }
    });
});

// parameter
app.all('/parameter',function(req,res){
    var name = req.body.name || req.query.name;
    var modelnumber = req.body.modelnumber || req.query.modelnumber;
    var series = req.body.series || req.query.series;

    var data = {name,modelnumber,series};
    var sql = "insert into products (name,modelnumber,series) values (?,?,?)"
    client.query(sql,[name,modelnumber,series],function(err,result){
        res.send(data);
    })
})


// var query = 'select * from products';
// client.query(query,function(err,result){
//     if(err){
//         console.log("쿼리문장에 오류가 있습니다");
//     }else{
//         console.log(result);
//     }
// });

// 웹서버를 실행
app.listen(3000,function(){
    console.log("Sever Running at ..");
    console.log("http://127.0.0.1:3000");
});