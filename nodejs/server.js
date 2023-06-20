// 모듈을 추출합니다.
var express = require('express');
const bodyParser = require('body-parser');
//웹 서버를 생성합니다.
var app = express();
app.use(bodyParser.json());	//요청 본문을 json 형태로 파싱
app.use(bodyParser.urlencoded({extended: false}));  //
app.use(express.static('public'));

//ajax 요청시 다중서버 접속지원
var cors = require('cors');
app.use(cors());

app.post('/user', function(request, response) {
    var name = request.body.user_name;
    response.send(name);
});

app.get("/parameter",function(request,response){
 var name=request.query.name;
 var region=request.query.region;
 response.send(`<h1>${name} : ${region}</h1>`);
});

var items=[
 {name:'우유', price:200},
 {name:'홍차', price:300},
 {name:'커피', price:500}
];

app.all('/data.html',function(req,response){
  var out="";
  items.forEach(function(item){
   out+="<div>";
   out+="<span>"+item.name+ ":" + item.price+"원</span>";
   out+="</div>";
  });
  response.send(out);
});
// 전체조회
app.get('/products',(req,res)=>{
    res.send(items);
});
app.post('/products',(req,res)=>{
    var name = req.body.name;
    var price = req.body.price;
    console.log(name,price);
    var item = {
        name: name,
        price: price
    }
    items.push(item)
    res.send({
        message:"데이터를 추가했습니다",
        data:item
    })
});
// 개별데이터 조회
app.get('/products/:id',(req,res)=>{
    var id = Number(req.params.id);
    if(isNaN(id)){
        res.send({error:"숫자를 입력해주세요"});
    }else if(items[id]){
        res.send(items[id])
    }else{
        res.send({error:"존재하지 않는 아이디입니다"});
    }
});
// 개별데이터수정
app.put("/products/:id",function(req,res){
    var id = req.params.id;
    var name = req.body.name;
    var price = req.body.price;
    if(items[id]){
        items[id].name = name;
        items[id].price = price;
        res.send({
            message:"데이터를 수정햇습니다",
            data:items[id]
        })
    }else{
        res.send({
            error:"존재하지않는 데이터입니다"
        })
    }
})
// 삭제하기
app.delete("/products/:id",function(req,res){
    var id = req.params.id;
    if(items[id]){
        var result = items.splice(id,1);
        res.send({
            message:"데이터를 지웠습니다",
            data:result
        })
    }else{
        res.send({
            error:"존재하지않는 데이터입니다"
        })
    }
})




// 웹 서버를 실행합니다.
app.listen(3000, function() {
    console.log("server Running at http://127.0.0.1:52275");
});
// npm install express@3.4.7