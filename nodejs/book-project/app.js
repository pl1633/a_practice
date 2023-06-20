const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('서버가 실행됩니다. http://localhost:${port}');
});

app.get('/customer',(req,res) =>{
    res.send('get 요청에 대한 응답');
});

app.get('/customer',function(req,res){
    res.send('post 요청에 대한 응답');
})